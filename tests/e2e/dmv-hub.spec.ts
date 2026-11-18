import { expect, test, type Page } from '@playwright/test'

function testIp() {
  return `203.0.113.${Math.floor(Math.random() * 10_000)}`
}

const publicRoutes = [
  '/',
  '/events',
  '/vibes',
  '/community',
  '/about',
  '/blog',
  '/blog/welcome-to-the-dmv-hub',
  '/submit',
  '/faq',
  '/support',
  '/gallery',
  '/games',
  '/privacy',
  '/terms',
  '/code-of-conduct',
  '/blog/death-of-dc-happy-hour',
  '/blog/dmv-discord-servers-for-adults',
  '/blog/introverts-guide-dc',
  '/blog/low-pressure-dates-dmv',
  '/blog/making-friends-after-25-in-dc',
  '/blog/navigating-nova-transplant-survival-guide',
  '/blog/silver-spring-food-crawl-recap',
  '/blog/sober-curious-in-dc',
]

async function useTheme(page: Page, theme: 'casual' | 'party' = 'casual') {
  await page.addInitScript((selectedTheme) => {
    localStorage.setItem('dmvhub-theme', selectedTheme)
    localStorage.setItem('dmvhub-theme-picked', '1')
  }, theme)
}

async function expectHealthyPage(page: Page, path: string) {
  const consoleIssues: string[] = []
  page.on('console', (message) => {
    if (message.type() === 'error' || message.type() === 'warning') {
      consoleIssues.push(`${message.type()}: ${message.text()}`)
    }
  })

  await page.goto(path)
  await expect(page.locator('body')).toContainText('The DMV Hub')
  await expect(page.locator('body')).not.toContainText('Unhandled Runtime Error')
  await expect(page.locator('body')).not.toContainText('Application error')

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth
  )
  expect(overflow, `${path} should not scroll horizontally`).toBeLessThanOrEqual(1)
  expect(consoleIssues, `${path} should not log console warnings/errors`).toEqual([])
}

test.describe('public site health', () => {
  for (const path of publicRoutes) {
    test(`${path} renders without runtime or layout regressions`, async ({ page }) => {
      await useTheme(page)
      await expectHealthyPage(page, path)
    })
  }
})

test('first visit theme picker contains focus and persists the selected theme', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')

  const dialog = page.getByRole('dialog', { name: /Pick your vibe/i })
  const casualChoice = page.getByRole('button', { name: /Casual/i })
  const partyChoice = page.getByRole('button', { name: /Party/i })

  await expect(dialog).toBeVisible()
  await expect(casualChoice).toBeFocused()
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden')

  await page.keyboard.press('Shift+Tab')
  await expect(partyChoice).toBeFocused()
  await page.keyboard.press('Tab')
  await expect(casualChoice).toBeFocused()

  const dialogBox = await dialog.boundingBox()
  expect(dialogBox?.y).toBeGreaterThanOrEqual(0)
  expect((dialogBox?.y ?? 0) + (dialogBox?.height ?? 0)).toBeLessThanOrEqual(667)

  await partyChoice.click()
  await expect(dialog).toBeHidden()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'party')
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden')
  expect(await page.evaluate(() => localStorage.getItem('dmvhub-theme-picked'))).toBe('1')
})

test('backend health reports the Phase 1 service status', async ({ request }) => {
  const response = await request.get('/api/health')
  expect(response.ok()).toBe(true)

  const body = await response.json()
  expect(body).toMatchObject({ ok: true, app: 'dmv-hub', phase: 'phase-1' })
  expect(['placeholder', 'configured']).toContain(body.services.contactForm)
  expect(['placeholder', 'configured']).toContain(body.services.eventForm)
})

test('backend validates contact submissions before forwarding', async ({ request }) => {
  const headers = { 'x-forwarded-for': testIp() }
  const invalid = await request.post('/api/contact', {
    headers,
    form: {
      name: 'QA Tester',
      email: 'not-an-email',
      subject: 'General Inquiry',
      message: 'Checking validation.',
    },
  })
  expect(invalid.status()).toBe(400)

  const validSubmission = await request.post('/api/contact', {
    headers,
    form: {
      name: 'QA Tester',
      email: 'qa@example.com',
      subject: 'General Inquiry',
      message: 'Checking fallback behavior.',
    },
  })
  expect([200, 503]).toContain(validSubmission.status())
  expect(await validSubmission.json()).toEqual(expect.objectContaining({ ok: validSubmission.ok() }))
})

test('backend rejects bot-like and oversized contact submissions', async ({ request }) => {
  const headers = { 'x-forwarded-for': testIp() }
  const bot = await request.post('/api/contact', {
    headers,
    form: {
      name: 'QA Tester',
      email: 'qa@example.com',
      subject: 'General Inquiry',
      message: 'Checking honeypot behavior.',
      website: 'https://spam.example',
    },
  })
  expect(bot.status()).toBe(400)

  const oversized = await request.post('/api/contact', {
    headers,
    form: {
      name: 'QA Tester',
      email: 'qa@example.com',
      subject: 'General Inquiry',
      message: 'x'.repeat(12_100),
    },
  })
  expect(oversized.status()).toBe(413)
})

test('backend validates event submissions before forwarding', async ({ request }) => {
  const headers = { 'x-forwarded-for': testIp() }
  const invalid = await request.post('/api/submit-event', {
    headers,
    form: {
      eventName: '',
      date: 'not-a-date',
      locationArea: 'DC',
      vibe: 'Gaming',
      description: 'Checking validation.',
    },
  })
  expect(invalid.status()).toBe(400)

  const validSubmission = await request.post('/api/submit-event', {
    headers,
    form: {
      eventName: 'QA Game Night',
      date: '2026-07-01T19:00',
      locationArea: 'DC',
      vibe: 'Gaming',
      description: 'Checking fallback behavior.',
    },
  })
  expect([200, 503]).toContain(validSubmission.status())
  expect(await validSubmission.json()).toEqual(expect.objectContaining({ ok: validSubmission.ok() }))
})

test('backend rate limits repeated submissions per client', async ({ request }) => {
  const ip = testIp()
  const responses = []

  for (let i = 0; i < 6; i += 1) {
    responses.push(await request.post('/api/contact', {
      headers: { 'x-forwarded-for': ip },
      form: {
        name: 'QA Tester',
        email: 'not-an-email',
        subject: 'General Inquiry',
        message: `Checking rate limit ${i}.`,
      },
    }))
  }

  expect(responses.slice(0, 5).every((response) => response.status() === 400)).toBe(true)
  expect(responses[5].status()).toBe(429)
})

test('event filters update the rendered event lane', async ({ page }) => {
  await useTheme(page)
  await page.goto('/events')
  const foodFilter = page.getByRole('link', { name: /^Food$/ }).filter({ visible: true })
  await foodFilter.click()
  await expect(page).toHaveURL(/filter=Food/)
  await expect(foodFilter).toHaveClass(/bg-hub-gradient/)
  await expect(page.locator('body')).toContainText(/restaurant|food/i)
})

test('mobile navigation opens and routes to Safety', async ({ page }) => {
  await useTheme(page)
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('button', { name: /toggle menu/i }).filter({ visible: true }).click()
  await page.getByRole('link', { name: /^Safety$/ }).filter({ visible: true }).click()
  await expect(page).toHaveURL(/\/safety$/)
  await expect(
    page.getByRole('heading', { name: /You should know/i }).filter({ visible: true }),
  ).toBeVisible()
})

test('support flow never sends users to a placeholder checkout', async ({ page }) => {
  await useTheme(page)
  await page.goto('/support')
  await expect(
    page.getByRole('heading', { name: /Help keep the DMV's social layer/i }).filter({ visible: true }),
  ).toBeVisible()
  await expect(page.locator('a[href*="REPLACE_WITH_YOUR_KOFI"]')).toHaveCount(0)

  const supportLink = page.getByRole('link', { name: /Support the Community/i }).filter({ visible: true })
  const supportButton = page.getByRole('button', { name: /Support the Community/i }).filter({ visible: true })

  if (await supportLink.count()) {
    await expect(supportLink).toHaveAttribute('href', /^https:\/\/ko-fi\.com\//)
  } else {
    await supportButton.click()
    await expect(page.getByRole('heading', { name: /Get in Touch/i })).toBeVisible()
    await expect(page.locator('select[name="subject"]')).toHaveValue('Sponsor / Donate')
  }
})

test('submit form handles the current Formspree configuration', async ({ page }) => {
  await useTheme(page)
  await page.goto('/submit')
  await page.locator('input[name="eventName"]:visible').fill('QA Game Night')
  await page.locator('input[name="date"]:visible').fill('2026-07-01T19:00')
  await page.locator('select[name="locationArea"]:visible').selectOption('DC')
  await page.locator('select[name="vibe"]:visible').selectOption('Gaming')
  await page.locator('textarea[name="description"]:visible').fill('A local smoke test event idea.')
  await page.getByRole('button', { name: /Submit Event Idea/i }).filter({ visible: true }).click()
  await expect(
    page
      .getByText(/Got it\.|Event submissions are not connected yet|Something blocked the submission/i)
      .filter({ visible: true }),
  ).toBeVisible()
})

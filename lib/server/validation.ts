type ValidationResult =
  | { ok: true; data: FormData }
  | { ok: false; status: number; message: string }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const encoder = new TextEncoder()

function textValue(data: FormData, key: string) {
  const value = data.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

function hasText(data: FormData, key: string) {
  return textValue(data, key).length > 0
}

function formTextBytes(data: FormData) {
  let bytes = 0
  data.forEach((value) => {
    if (typeof value === 'string') {
      bytes += encoder.encode(value).byteLength
    }
  })
  return bytes
}

function exceeds(data: FormData, limits: Array<[string, number]>) {
  return limits.some(([key, max]) => textValue(data, key).length > max)
}

function isBotSubmission(data: FormData) {
  return hasText(data, 'website')
}

export function validateContactSubmission(data: FormData): ValidationResult {
  if (isBotSubmission(data)) {
    return { ok: false, status: 400, message: 'Submission rejected.' }
  }

  if (formTextBytes(data) > 12_000) {
    return { ok: false, status: 413, message: 'Submission is too large. Please shorten it and try again.' }
  }

  if (!hasText(data, 'name') || !hasText(data, 'email') || !hasText(data, 'subject') || !hasText(data, 'message')) {
    return { ok: false, status: 400, message: 'Name, email, purpose, and message are required.' }
  }

  if (!emailPattern.test(textValue(data, 'email'))) {
    return { ok: false, status: 400, message: 'Please enter a valid email address.' }
  }

  if (exceeds(data, [['name', 100], ['email', 254], ['subject', 120], ['message', 2_000]])) {
    return { ok: false, status: 400, message: 'One or more fields is too long.' }
  }

  return { ok: true, data }
}

export function validateEventSubmission(data: FormData): ValidationResult {
  if (isBotSubmission(data)) {
    return { ok: false, status: 400, message: 'Submission rejected.' }
  }

  if (formTextBytes(data) > 16_000) {
    return { ok: false, status: 413, message: 'Submission is too large. Please shorten it and try again.' }
  }

  const required = ['eventName', 'date', 'locationArea', 'vibe', 'description']
  if (required.some((key) => !hasText(data, key))) {
    return { ok: false, status: 400, message: 'Event name, date, location area, vibe, and description are required.' }
  }

  const date = new Date(textValue(data, 'date'))
  if (Number.isNaN(date.getTime())) {
    return { ok: false, status: 400, message: 'Please enter a valid event date.' }
  }

  if (exceeds(data, [
    ['eventName', 140],
    ['date', 50],
    ['locationArea', 20],
    ['vibe', 50],
    ['locationLabel', 160],
    ['description', 3_000],
    ['discordHandle', 80],
  ])) {
    return { ok: false, status: 400, message: 'One or more fields is too long.' }
  }

  return { ok: true, data }
}

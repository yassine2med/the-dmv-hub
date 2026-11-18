export const siteConfig = {
  name: 'The DMV Hub',
  tagline: 'Your social life in DC, MD & VA',
  description:
    'The DMV Hub is a social community for adults 22+ across DC, MD & VA. Make friends, find dates, discover events, and kill the boredom.',
  url: 'https://thedmvhub.com',
  discordInvite: 'https://discord.gg/dC8vPZmXx9',
  discordServerId: '1517202899564757103',
  contactEmail: 'hello@thedmvhub.com',
  social: {
    instagram: 'https://instagram.com/thedmvhub',
    tiktok: 'https://tiktok.com/@thedmvhub',
    linkedin: 'https://www.linkedin.com/company/thedmvhub',
  },
  // Public Formspree form id (also settable via FORMSPREE_FORM_ID env, which takes precedence on the server).
  formspreeId: process.env.FORMSPREE_FORM_ID || 'xdarebon',
  koFiUrl: process.env.NEXT_PUBLIC_KOFI_URL || 'https://ko-fi.com/thedmvhub',
}

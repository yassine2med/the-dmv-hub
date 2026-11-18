/**
 * Public launch-stage facts. Keep these limited to values the repository can
 * prove without inventing live member, RSVP, attendance, or event-history data.
 */
export const communityStats = [
  { value: '22+', label: 'Adults Welcome', sub: 'no upper age limit', accent: 'text-hub-pink' },
  { value: '3', label: 'Regions Connected', sub: 'DC · Maryland · Virginia', accent: 'text-hub-teal' },
  { value: '16', label: 'Interest Lanes', sub: 'from food to rec sports', accent: 'text-hub-purple' },
  { value: '14', label: 'Planned Hangouts', sub: 'confirm details in Discord', accent: 'text-hub-blue' },
]

export const launchSignals = [
  { text: 'Founding Discord open to adults 22+', dot: 'bg-hub-blue' },
  { text: 'Planning: game night in Adams Morgan', dot: 'bg-hub-teal' },
  { text: 'Planning: Ethiopian food night in Silver Spring', dot: 'bg-hub-pink' },
  { text: 'Interest lanes: friends · dating · plans · momentum', dot: 'bg-hub-purple' },
  { text: 'DC · Maryland · Virginia', dot: 'bg-hub-teal' },
  { text: 'Community rules published before growth', dot: 'bg-hub-blue' },
]

export const communityGoals = [
  {
    quote:
      'A first event where nobody has to work the room cold: clear details, a shared activity, and an easy way to introduce yourself.',
    meta: 'Design goal · first-timer experience',
    accent: 'border-hub-pink/40',
    dot: 'bg-hub-pink',
  },
  {
    quote:
      'Useful neighborhood plans across the whole DMV, with final dates, costs, accessibility notes, and host details confirmed before anyone travels.',
    meta: 'Operating goal · reliable plans',
    accent: 'border-hub-teal/40',
    dot: 'bg-hub-teal',
  },
  {
    quote:
      'A founding group that helps shape the culture instead of arriving after every rule and tradition has already been decided.',
    meta: 'Launch goal · community ownership',
    accent: 'border-hub-blue/40',
    dot: 'bg-hub-blue',
  },
]

import type { FAQItem } from '@/lib/types'

/**
 * Each FAQ is tagged with the *concern* it resolves (its `category`), not a
 * position in a list. The FAQ page groups by these channels:
 *   basics    — cost, access, age, coverage
 *   fit       — who shows up and whether you'll belong
 *   mechanics — how Discord, events, and hosting work
 *   safety    — staying safe and showing up solo
 */
export const faqs: FAQItem[] = [
  {
    question: 'Is this free?',
    category: 'basics',
    answer:
      'The Discord server is free to join. A proposed event may involve venue, food, ticket, transportation, or equipment costs. Confirm the final price and refund terms in Discord before attending; the website calendar is a planning board, not a purchase guarantee.',
  },
  {
    question: 'Do I need to make an account on the website?',
    category: 'basics',
    answer:
      'No. Just join the Discord server. That is where all the action happens: profiles, event planning, conversation, and community coordination. The website is the front door, and Discord is the actual room.',
  },
  {
    question: 'What is the age range?',
    category: 'basics',
    answer:
      'The community is open to adults 22 and older. The minimum age reflects where most people actually are when the easy social structures — college, dorms, first jobs — start to fade and building a real social life requires more intention. There is no upper limit. If you are showing up and want to connect, you belong here.',
  },
  {
    question: 'Is this just for dating?',
    category: 'fit',
    answer:
      'Not at all. Dating mixers are one event type among many. Most people join to make friends, find a crew to do things with, and actually use their weekends. Come for whatever you need, whether that is friendship, social plans, networking, or yes, eventually meeting someone. The community accommodates all of it.',
  },
  {
    question: 'I am shy or introverted. Is this for me?',
    category: 'fit',
    answer:
      'That is one of the main audiences we are designing for. Planned formats such as speed friending, small dinners, and activity-based hangs give people a reason to talk without working a room cold. Check the final format and group size in Discord before choosing an event.',
  },
  {
    question: 'Is this diverse? Who actually shows up?',
    category: 'fit',
    answer:
      'The DMV is exceptionally diverse, and the community is being built to welcome that full range of backgrounds. We are still in the founding stage, so we will not pretend every identity or neighborhood is already represented at every event. The standard is simple: adults 22+, respectful participation, and room for people across DC, Maryland, and Virginia.',
  },
  {
    question: 'I just moved to the DMV and I know nobody. Is this for me?',
    category: 'fit',
    answer:
      'Yes. The community is specifically being built for transplants and locals who want a wider circle. Because it is early, joining now also means helping shape which neighborhoods, interests, and event formats become active first.',
  },
  {
    question: 'Is this safe?',
    category: 'safety',
    answer:
      'No online community can guarantee safety. Read the Code of Conduct, confirm final event details in Discord, meet in public, tell someone where you are going, arrange your own transportation, and leave if something feels wrong. For DMV Hub-hosted events, the goal is to publish a named point of contact and clear venue details. Concerns can be sent to the published contact email.',
  },
  {
    question: 'What areas does this cover?',
    category: 'basics',
    answer:
      'The intended coverage is the District of Columbia, Maryland, and Northern Virginia. The planning board includes ideas across DC, Silver Spring, Bethesda, Hyattsville, College Park, Arlington, Tysons, Rosslyn, and possible day-trip destinations; it does not mean every area already has an active event.',
  },
  {
    question: 'What happens on Discord?',
    category: 'mechanics',
    answer:
      'The founding server currently has public spaces for chill conversation, gaming, event coordination, and general vibe discussion. The channel structure may evolve as real members join and show which regions and interests need dedicated space.',
  },
  {
    question: 'Do events actually happen or do they get cancelled?',
    category: 'mechanics',
    answer:
      'The website currently shows proposed formats and planning targets, not a record of confirmed or completed events. Before attending, check Discord for a final date, public venue, named host, cost, accessibility notes, capacity, and cancellation updates.',
  },
  {
    question: 'Can I suggest or host an event?',
    category: 'mechanics',
    answer:
      'Yes, use the Submit an Event page. A submission is a proposal, not an automatic listing or endorsement. If you have a venue connection, a skill to share, or a practical idea for the founding community, include enough detail for the organizer to review it.',
  },
  {
    question: 'What if I come to one event and don\'t know anyone?',
    category: 'safety',
    answer:
      'Coming alone can feel difficult. For a DMV Hub-hosted plan, confirm that a named host and clear meeting point are published before attending. Meet in public, keep your own transportation plan, and contact the host if you need help finding the group; no introduction time can be guaranteed.',
  },
  {
    question: 'Is this only in English?',
    category: 'fit',
    answer:
      'The current website and primary moderation language are English. Members may propose language exchanges or multilingual plans in Discord, but dedicated language channels or translated event support are not guaranteed.',
  },
]

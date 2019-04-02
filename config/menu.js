const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'live' },
  { type: 'config', id: 'tickets' },
  { type: 'page', title: 'Pass\'Bar', id: 2822, link: '/passbar' },
  { type: 'config', id: 'tournaments' },
  { type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      { type: 'config', id: 'schedule' },
      { type: 'config', id: 'exhibitors' },
      { type: 'config', id: 'family' },
      { type: 'config', id: 'influencers' },
      { type: 'page', title: 'Une page', id: 1246, link: '/grand-poitiers' },
      { type: 'page', title: 'Cosplay', id: 2673, link: '/cosplay' },
      { type: 'page', title: 'Les Offs', id: 2727, link: '/offs' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu

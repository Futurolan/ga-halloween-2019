const menu = [
  { type: 'config', id: 'news' },
  { type: 'config', id: 'live' },
  { type: 'config', id: 'tickets' },
  { type: 'config', id: 'tournaments' },
  { type: 'nolink',
    title: 'Infos',
    children: [
      { type: 'config', id: 'info' },
      { type: 'config', id: 'exhibitors' },
      { type: 'config', id: 'family' },
      { type: 'config', id: 'influencers' },
      { type: 'page', title: 'Une page', id: 1246, link: '/grand-poitiers' }
    ] },
  { type: 'config', id: 'partners' }
]

module.exports = menu

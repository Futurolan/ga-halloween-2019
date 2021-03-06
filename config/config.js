let config = {
  title: 'Gamers Assembly : Halloween Edition 2019',
  logo: `/static/img/logo-orange-100x100.png`,
  description: 'L\'édition 2019 de la Gamers Assembly Halloween Edition aura lieu du 08 au 11 novembre à la salle de spectacle de la Hune -Saint - Benoît(86)',
  metaImagePath: `/static/img/logo-orange-200x200.png`,
  gaTrackingId: 'UA-128777022-7',
  mainPartner: {
    logo: '/static/img/logo_st_benoit.jpg',
    url: 'http://www.ville-saint-benoit.fr/'
  },
  home: {
    banner: '/static/img/gahe2019.png',
    twitterAccount: 'GamersAssembly',
    partners: {
      active: false,
      delay: 10,
      count: 6
    }
  },
  news: {
    title: 'Actualités',
    description: 'Retrouvez toutes les actualités de la Gamers Assembly Halloween Edition 2019',
    link: '/news'
  },
  partners: {
    title: 'Partenaires',
    description: 'Retrouvez la liste de tous nos partenaires',
    link: '/partenaires'
  },
  tournaments: {
    title: 'Tournois',
    description: 'Tous les tournois de la Gamers Assembly Halloween Edition 2019',
    link: '/tournois'
  },
  info: {
    title: 'Venir à la GA',
    description: 'Toutes les informations sur cet évènement',
    link: '/infos'
  },
  schedule: {
    title: 'Programme',
    description: 'Le programme heure par heure pour tout l\'évènement',
    link: '/schedule'
  },
  live: {
    title: 'Live',
    description: 'Tous les streams et résultats en direct',
    link: '/live'
  },
  tickets: {
    title: 'Billetterie',
    description: 'Achetez vos places pour la Gamers Assembly Halloween Edition 2019',
    link: '/billetterie',
    pass: {
      title: 'Location de matériel',
      text: 'Pour louer du matériel (écran, PC, chaise, ...), rendez-vous sur la billetterie de notre partenaire SCOUP Esport !',
      button: 'Billetterie SCOUP'
    },
    minor: {
      title: 'Informations pour les mineurs',
      text: 'Vous devez télécharger l\'autorisation parentale, l\'imprimer, la remplir et l\'apporter le jour de votre venue avec votre billet.',
      button: 'Télécharger l\'autorisation parentale (format pdf)'
    },
    rules: {
      title: 'Règlement intérieur',
      text: 'L\'acquisition d\'un ticket entraîne l\'adhésion au règlement intérieur disponible ci-dessous.',
      button: 'Télécharger le règlement intérieur (format pdf)'
    }
  },
  exhibitors: {
    title: 'Exposants',
    description: 'Les exposants que vous pourrez retrouver à la Gamers Assembly',
    link: '/exposants'
  },
  family: {
    title: 'Espace Famille',
    description: 'Les activités à faire en famille durant la Gamers Assembly',
    link: '/espace-famille'
  },
  influencers: {
    title: 'VIPs',
    description: 'Les personnalités qui seront présentes pour la Gamers Assembly',
    link: '/vips'
  },
  contact: {
    active: true,
    pageId: 6
  },
  press: {
    active: false,
    pageId: 7
  },
  legals: {
    active: true,
    pageId: 8
  },
  recruit: {
    active: false,
    title: 'Recrutement',
    description: 'Devenir bénévole pour la GAMERS ASSEMBLY, c\'est par ici !!!',
    formUrl: 'https://goo.gl/forms/84pHQfSp50RcuUel2'
  },
  social: {
    twitter: 'https://twitter.com/GamersAssembly',
    facebook: 'https://www.facebook.com/GamersAssembly',
    twitch: 'https://twitch.tv/gamers_assembly',
    youtube: 'https://www.youtube.com/channel/UCbfhRIAsc4xdRACnDUwRfRw',
    flickr: 'https://www.flickr.com/photos/futurolan',
    discord: 'https://discordapp.com/invite/gamersassembly'
  }
}

module.exports = config

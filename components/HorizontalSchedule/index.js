import React from 'react'
import NoSSR from 'react-no-ssr'
import VisTimeline from 'components/VisTimeline'

import './styles.scss'

class HorizontalSchedule extends React.Component {
  /*
    Dans les props on récupère la liste de tous les évènements triés par date de début (title / Date début / Date Fin / Tournoi(optionel) / Salle)
    On effectue une moulinette pour récupérer les jours avec date min et date max.
   */
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    var options = {
      zoomMin: 1000 * 60 * 60 * 4,
      zoomMax: 1000 * 60 * 60 * 24 * 3,
      rollingMode: false,
      hiddenDates: [{ start: '2018-03-31 02:00:00', end: '2018-03-31 09:00:00', repeat: 'daily' }],
      stack: false,
      groupOrder: function (a, b) {
        return a.value - b.value
      },
      orientation: 'both',
      margin: 4
    }
    const items = [{
      start: new Date(2010, 7, 15, 10, 0, 0), // end is optional
      end: new Date(2010, 7, 15, 16, 0, 0), // end is optional
      content: 'Trajectory A',
      group: 3
    },
    {
      start: new Date(2010, 7, 16, 14, 0, 0), // end is optional
      end: new Date(2010, 7, 16, 16, 0, 0), // end is optional
      content: 'Trajectory B',
      group: 3

    },
    {
      start: new Date(2010, 7, 17, 14, 0, 0), // end is optional
      end: new Date(2010, 7, 17, 22, 0, 0), // end is optional
      content: 'Trajectory C',
      group: 2

    }]
    const groups = [{
      id: 3,
      content: 'Group avec un nom plus long'
    },
    {
      id: 2,
      content: 'Group C'
    }]
    return (
      <div className='ga-horizontal-schedule' >
        <NoSSR onSSR={<span> Chargement du planning en cours !!!</span>}>
          <VisTimeline options={options} items={items} groups={groups} />
        </NoSSR>
      </div>
    )
  }
}

export default HorizontalSchedule

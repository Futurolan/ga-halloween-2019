import React from 'react'
import NoSSR from 'react-no-ssr'
import VisTimeline from 'components/schedule/VisTimeline'

import './styles.scss'
import PropTypes from 'prop-types'

class HorizontalSchedule extends React.Component {
  /*
    Dans les props on récupère la liste de tous les évènements triés par date de début (title / Date début / Date Fin / Tournoi(optionel) / Salle)
    On effectue une moulinette pour récupérer les jours avec date min et date max.
   */
  constructor (props) {
    super(props)
    this.state = { groups: [], items: [] }
  }

  componentDidMount () {
    let groups = []
    let items = []
    for (let stageIndex in this.props.data) {
      const stage = this.props.data[stageIndex].stage
      groups.push({ content: stage.title, id: stageIndex })
      for (let activityIndex in stage.activities) {
        const activity = stage.activities[activityIndex].activity
        items.push({
          start: new Date(activity.date.startDate),
          end: new Date(activity.date.endDate),
          group: stageIndex,
          content: activity.title,
          id: activity.id,
          style: 'background-color:red'
        })
      }
    }
    this.setState({ groups: groups, items: items })
  }
  test (e) {
    console.log(e)
  }

  render () {
    var options = {
      zoomMin: 1000 * 60 * 60 * 4,
      zoomMax: 1000 * 60 * 60 * 24 * 3,
      hiddenDates: [{ start: '2018-03-31 02:00:00', end: '2018-03-31 09:00:00', repeat: 'daily' }],
      stack: false,
      orientation: 'both',
      margin: 4,
      selectable: false
    }

    const { groups, items } = this.state
    return (
      <div className='ga-horizontal-schedule' >
        <NoSSR onSSR={<span> Chargement du planning en cours !!!</span>}>
          <VisTimeline options={options} items={items} groups={groups} clickHandler={(e) => this.test(e)} />
        </NoSSR>
      </div>
    )
  }
}

HorizontalSchedule.propTypes = {
  data: PropTypes.array
}

export default HorizontalSchedule

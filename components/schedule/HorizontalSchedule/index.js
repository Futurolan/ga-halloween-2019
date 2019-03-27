import React from 'react'
import NoSSR from 'react-no-ssr'
import VisTimeline from 'components/schedule/VisTimeline'

import './styles.scss'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import Link from 'next/link'

class HorizontalSchedule extends React.Component {
  constructor (props) {
    super(props)
    this.state = { groups: [], items: [], modal: undefined }
    this.escFunction = this.escFunction.bind(this)
  }

  componentDidMount () {
    document.addEventListener('keydown', this.escFunction, false)

    let groups = []
    let items = []
    for (let stageIndex in this.props.data) {
      const stage = this.props.data[stageIndex].stage
      groups.push({ content: stage.title, id: stageIndex })
      for (let activityIndex in stage.activities) {
        const activity = stage.activities[activityIndex].activity
        let item = {
          start: new Date(activity.date.startDate),
          end: new Date(activity.date.endDate),
          group: stageIndex,
          content: activity.title,
          id: activity.id,
          description: activity.description.processed,
          url: activity.url
        }
        if (activity.tournament && activity.tournament.entity && activity.tournament.entity.nid && activity.tournament.entity.title) {
          item.tournamentId = activity.tournament.entity.nid
          item.tournamentTitle = activity.tournament.entity.title
        }
        if (activity.tournament && activity.tournament.entity && activity.tournament.entity.url && activity.tournament.entity.url.path) {
          item.tournamentUrl = activity.tournament.entity.url.path
        }
        if (activity.tournament && activity.tournament.entity && activity.tournament.entity.game && activity.tournament.entity.game.entity && activity.tournament.entity.game.entity.color) {
          item.style = `background-color:${activity.tournament.entity.game.entity.color}`
        }
        items.push(item)
      }
    }
    this.setState({ groups: groups, items: items })
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.escFunction, false)
  }

  onItemClick (e) {
    for (let itemIndex in this.state.items) {
      const item = this.state.items[itemIndex]
      if (item.id === e.item) {
        this.setState({ modal: item })
      }
    }
  }

  escFunction (event) {
    if (event.keyCode === 27) {
      this.closeModal()
    }
  }

  closeModal () {
    this.setState({ modal: undefined })
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

    const { groups, items, modal } = this.state

    return (
      <div className='ga-horizontal-schedule' >
        <NoSSR onSSR={<span> Chargement du planning en cours !!!</span>}>
          <VisTimeline options={options} items={items} groups={groups} clickHandler={(e) => this.onItemClick(e)} />
        </NoSSR>
        {modal && <div className='modal is-active'>
          <div className='modal-background' onClick={(e) => this.closeModal()} />
          <div className='modal-content'>
            <div className='card box'>
              <div className='card-header'>
                <div className='is-size-4 has-text-weight-bold'>{modal.content} </div>
              </div>
              <div className='card-content'>
                <div className='has-text-weight-bold has-text-dark-grey'>De <Moment date={modal.start} format='hh:mm' /> à <Moment date={modal.end} format='hh:mm' /></div>
                <div className='content' dangerouslySetInnerHTML={{ __html: modal.description }} />
              </div>
              {(modal.tournamentId || modal.url) && <div className='card-footer'>
                {modal.tournamentId && <Link as={modal.tournamentUrl ? modal.tournamentUrl : `/tournois-single?nid=${modal.tournamentId}`} href={{ pathname: '/tournois-single', query: { nid: modal.tournamentId } }}><a>Plus d'informations sur {modal.tournamentTitle}</a></Link>}
                {modal.tournamentId === undefined && modal.url && <Link href={modal.url}><a>Plus d'informations</a></Link>}
              </div>}
            </div>
          </div>
          <button className='modal-close is-large' aria-label='close' onClick={() => this.closeModal()} />

        </div>}
      </div>
    )
  }
}

HorizontalSchedule.propTypes = {
  data: PropTypes.array
}

export default HorizontalSchedule

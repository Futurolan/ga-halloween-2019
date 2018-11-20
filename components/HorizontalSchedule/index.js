import React from 'react'
import Timeline from 'react-calendar-timeline'
import moment from 'moment'
import NoSSR from 'react-no-ssr'
import InputRange from 'react-input-range'

import './styles.scss'

class HorizontalSchedule extends React.Component {
  /*
    Dans les props on récupère la liste de tous les évènements triés par date de début (title / Date début / Date Fin / Tournoi(optionel) / Salle)
    On effectue une moulinette pour récupérer les jours avec date min et date max.
   */
  constructor (props) {
    super(props)
    this.state = {
      visibleTimeStart: new Date('2018-11-14T00:00:00.000Z').getTime(),
      visibleTimeEnd: new Date('2018-11-14T06:00:00.000Z').getTime(),
      timeSteps: {
        second: 1,
        minute: 1,
        hour: 1,
        day: 1,
        month: 1,
        year: 1
      },
      items: [
        {
          id: 1,
          group: 1,
          title: 'item 1',
          start_time: moment('2018-11-14T03:00:00.000Z'),
          end_time: moment('2018-11-14T03:00:00.000Z').add(1, 'hour')
        },
        {
          id: 2,
          group: 2,
          title: 'item 2',
          start_time: moment('2018-11-14T03:00:00.000Z').add(-0.5, 'hour'),
          end_time: moment('2018-11-14T03:00:00.000Z').add(0.5, 'hour')
        },
        {
          id: 3,
          group: 1,
          title: 'item 3',
          start_time: moment('2018-11-14T03:00:00.000Z').add(2, 'hour'),
          end_time: moment('2018-11-14T03:00:00.000Z').add(6, 'hour')
        }
      ],
      value: 0
    }
    this.testClick = this.testClick.bind(this)
    this.updateValue = this.updateValue.bind(this)
  }

  testClick () {
    this.setState({
      visibleTimeStart: new Date('2018-11-14T06:00:00.000Z').getTime(),
      visibleTimeEnd: new Date('2018-11-14T12:00:00.000Z').getTime()
    })
  }

  onTimeChange (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) {
    const minTime = new Date('2018-11-14T00:00:00.000Z').getTime()
    const maxTime = new Date('2018-11-17T00:00:00.000Z').getTime()
    if (visibleTimeStart < minTime && visibleTimeEnd > maxTime) {
      updateScrollCanvas(minTime, maxTime)
    } else if (visibleTimeStart < minTime) {
      updateScrollCanvas(minTime, minTime + (visibleTimeEnd - visibleTimeStart))
    } else if (visibleTimeEnd > maxTime) {
      updateScrollCanvas(maxTime - (visibleTimeEnd - visibleTimeStart), maxTime)
    } else {
      updateScrollCanvas(visibleTimeStart, visibleTimeEnd)
    }
  }

  updateValue (value) {
    const timelineDuration = new Date('2018-11-17T00:00:00.000Z').getTime() - new Date('2018-11-14T00:00:00.000Z').getTime()
    const offset = Math.round((timelineDuration * value) / 100)

    this.setState({
      value: value,
      visibleTimeStart: new Date(new Date('2018-11-14T00:00:00.000Z').getTime() + offset).getTime(),
      visibleTimeEnd: new Date(new Date('2018-11-14T06:00:00.000Z').getTime() + offset).getTime(),
    })
  }

  render () {
    const groups = [{ id: 1, title: 'group 1' }, { id: 2, title: 'group 2' }]

    return (
      <div className='ga-horizontal-schedule' >
        <NoSSR onSSR={<span> Chargement du planning en cours !!!</span>}>
          <Timeline
            groups={groups}
            items={this.state.items}
            visibleTimeStart={this.state.visibleTimeStart}
            visibleTimeEnd={this.state.visibleTimeEnd}
            lineHeight={70}
            itemHeightRatio={0.95}
            headerLabelGroupHeight={0}
            timeSteps={this.state.timeSteps}
            onTimeChange={this.onTimeChange}
            canResize={false}
            canMove={false}
            canChangeGroup={false}
            maxZoom={1000 * 60 * 60 * 6}
            minZoom={1000 * 60 * 60 * 6}
            sidebarContent={<div />}
          />
        </NoSSR>

        <div className='button' onClick={() => { this.testClick() }}>PAF</div>
        <InputRange
          maxValue={100}
          minValue={0}
          value={this.state.value}
          onChange={this.updateValue} />
      </div>
    )
  }
}

export default HorizontalSchedule

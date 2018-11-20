import React from 'react'

import HorizontalSchedule from 'components/HorizontalSchedule'

import './styles.scss'

class ScheduleLoader extends React.Component {
  constructor (props) {
    super(props)
    this.state = { windowWidth: undefined }
  }

  handleResize = () => this.setState({
    windowWidth: window.innerWidth
  })

  componentDidMount () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize)
  }

  render () {
    return (
      <div className='ga-schedule-loader container'>
        {this.state.windowWidth > 1024 && <HorizontalSchedule />}
        {this.state.windowWidth <= 1024 && <div>//TODO Charger le VerticalSchedule</div>}
        {this.state.windowWidth === undefined && <div>Chargement en cours</div>}
      </div>
    )
  }
}

export default ScheduleLoader

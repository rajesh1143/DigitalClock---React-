import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor method called')
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
    console.log('componentDidMount called')
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
    console.log('componentWillUnMount called')
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    console.log('render method called')
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock

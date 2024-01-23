// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    onIncreaseRandomNumber: 0,
  }

  onRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const getRandomNumber = this.onRandomNumber()
    this.setState({
      onIncreaseRandomNumber: getRandomNumber,
    })
  }

  render() {
    const {onIncreaseRandomNumber} = this.state
    const EvenOddText = onIncreaseRandomNumber % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="background-container">
        <div className="card-container">
          <h1>Count {onIncreaseRandomNumber}</h1>
          <p className="p1">Count is {EvenOddText} </p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="p2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

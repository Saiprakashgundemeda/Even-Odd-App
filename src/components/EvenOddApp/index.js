// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    increaseCount: 0,
  }

  onRandomNumber = () => Math.ceil(Math.random() * 100)

  checkEvenOdd = () => {
    console.log('clicked')
    const randomNumber = this.onRandomNumber()
    this.setState(prevState => ({
      increaseCount: prevState.increaseCount + randomNumber,
    }))
  }

  render() {
    const {increaseCount} = this.state
    const evenOddText = increaseCount % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bgSection">
        <div className="bgSection2">
          <h1 className="heading">Count {increaseCount}</h1>
          <p className="paragraph">Count is {evenOddText}</p>
          <button type="button" className="button" onClick={this.checkEvenOdd}>
            On Increment
          </button>
          <p className="paragraph2">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

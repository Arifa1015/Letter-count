// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {enterInput: ''}

  onEnteringInput = event => {
    const {value} = event.target
    this.setState({
      enterInput: value,
    })

    // console.log(event.target.value)
  }

  render() {
    const {enterInput} = this.state
    return (
      <div className="app-container">
        <div className="inner-container">
          <div className="content-container">
            <h1 className="heading">Calculate the Letters you Enter</h1>
            <label className="para" htmlFor="input-element">
              Enter the Phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="input-style"
              value={enterInput}
              id="input-element"
              onChange={this.onEnteringInput}
            />
            <p className="box-style">No.of letters: {enterInput.length}</p>
          </div>
          <div className="image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="image-logo"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator

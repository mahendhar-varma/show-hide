import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  displayFirstname = () => {
    this.setState(prevState => {
      const {firstname} = prevState

      if (firstname === false) {
        return {firstname: true}
      }
      return {firstname: false}
    })
  }

  displayLastname = () => {
    this.setState(prevState => {
      const {lastname} = prevState

      if (lastname === false) {
        return {lastname: true}
      }
      return {lastname: false}
    })
  }

  render() {
    const {firstname, lastname} = this.state
    let firstnameDisplay
    let lastnameDisplay

    if (firstname === true) {
      firstnameDisplay = (
        <div className="name-container">
          <h1 className="name">Joe</h1>
        </div>
      )
    }

    if (lastname === true) {
      lastnameDisplay = (
        <div className="name-container">
          <h1 className="name">Jonas</h1>
        </div>
      )
    }

    return (
      <div className="container">
        <h1 className="title">Show/Hide</h1>
        <div className="display-on-off-container">
          <div>
            <button
              className="button"
              onClick={this.displayFirstname}
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstnameDisplay}
          </div>
          <div>
            <button
              className="button"
              onClick={this.displayLastname}
              type="button"
            >
              Show/Hide Lastname
            </button>
            {lastnameDisplay}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide

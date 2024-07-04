import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  lightMode = () => {
    this.setState(() => ({isLightMode: true}))
  }

  darkMode = () => {
    this.setState(() => ({isLightMode: false}))
  }

  render() {
    const {isLightMode} = this.state

    if (isLightMode !== true) {
      return (
        <div className="main-container">
          <div className="dark-container">
            <h1>Click To Change Mode</h1>
            <div>
              <button type="button" onClick={this.lightMode}>
                Light Mode
              </button>
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="main-container">
        <div className="light-container">
          <h1>Click To Change Mode</h1>
          <div>
            <button type="button" onClick={this.darkMode}>
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

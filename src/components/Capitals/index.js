import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {idName: 'NEW_DELHI'}

  onChangeCapitalCity = event => {
    this.setState({idName: event.target.value})
  }

  render() {
    const {idName} = this.state
    const countryData = countryAndCapitalsList.filter(
      each => each.id === idName,
    )
    const {country} = countryData[0]
    return (
      <div className="app-container">
        <div className="selection-container">
          <h1>Countries And Capitals</h1>
          <div className="options-container">
            <select className="dropdown" onChange={this.onChangeCapitalCity}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1 className="countryName">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals

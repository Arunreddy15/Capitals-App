import {Component} from 'react'
import './index.css'

class Login extends Component {
  onSubmitLogin = async event => {
    event.preventDefault()
    const response = await fetch(
      'https://api.aniapi.com/v1/oauth?response_type=token&client_id=11259369-89c2-4f1d-86f4-c44f354723e0&redirect_uri=http://http://localhost:3000/login',
    )
    if (response.ok === true) {
      console.log('re')
    }
  }

  render() {
    return (
      <div className="app-container">
        <form className="login-container" onSubmit={this.onSubmitLogin}>
          <h1 className="heading">
            To login into <span className="app-name">Anime</span> Please click
            below button
          </h1>
          <button
            type="submit"
            className="loginBtn"
            onClick={this.onClickLogin}
          >
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default Login

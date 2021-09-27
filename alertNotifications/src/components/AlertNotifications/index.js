// Write your code here
import {icons} from 'react-icons'
import Notification from '../Notification'
import './index.css'

const AlertNotifications = () => (
  <div className="alert-notifications-container">
    <h1>Alert Notifications</h1>
    <ul>
      <li>
        <Notification>Success</Notification>
        <Notification>desc</Notification>
      </li>
      <li>
        <Notification>Warning</Notification>
      </li>
    </ul>
  </div>
)
export default AlertNotifications

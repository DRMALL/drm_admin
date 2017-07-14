
import { browserHistory } from 'react-router'

export default () => {
  localStorage.clear()
  browserHistory.push('/login')
}

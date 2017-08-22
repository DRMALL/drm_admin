
import { browserHistory } from 'react-router'


export default e => {
  localStorage.setItem('userId', e.currentTarget.dataset.userId )
  browserHistory.push('/user/edit')
}

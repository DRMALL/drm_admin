
import { browserHistory } from 'react-router'


export default e => {
  console.log(e.currentTarget.dataset.userId)
  localStorage.setItem('userId', e.currentTarget.dataset.userId )
  browserHistory.push('/user/edit')
}

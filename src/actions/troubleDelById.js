

import { troubleAction } from '../commons/apis'
import getTroubleArr from './getTroubleArr'
import store from '../commons/store'
import dispatch from './dispatch'
import Http from './Http'

export default () => {
  const { troubleId } = store.getState().trouble
  Http(`${troubleAction}/${troubleId}`, 'del', true)
  .then(res => {
    dispatch('TROUBLE_DEL_TROUBLE_SUCCESS')
    getTroubleArr()
  })
  .catch( res => {
    console.error(res)
  } )
}

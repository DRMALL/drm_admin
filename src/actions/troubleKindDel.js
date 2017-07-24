

import Http from './Http'
import { troubleKindAction } from '../commons/apis'
import getTroubleKindArr from './getTroubleKindArr'
import store from '../commons/store'
import dispatch from './dispatch'




export default () => {
  // const { id } = e.cureentarget.dataset
  const { troubleKindId } = store.getState().trouble
  Http( `${troubleKindAction}/${troubleKindId}`, 'del', true )
  .then( res => {
    dispatch('TOUBLE_DEL_TROUBLE_KIND_SUCCESS')
    getTroubleKindArr()
  } )
  .catch( res => console.error(res) )
}

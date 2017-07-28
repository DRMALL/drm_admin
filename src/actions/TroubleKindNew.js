

import Http from './Http'
import { troubleKindAdd } from '../commons/apis'
import store from '../commons/store'
import getTroubleKindArr from './getTroubleKindArr'
import dispatch from './dispatch'
import MissWarn from '../utils/MissWarn'

export default () => {
  const { kind } = store.getState().trouble
  if(!kind) MissWarn()
  else {
  let obj = {}
  obj.text = kind
  Http( troubleKindAdd, 'post', true, obj )
  .then(res => {
    getTroubleKindArr()
    dispatch('TROUBLE_ADD_TROUBLE_KIND_SUCCESS')
  })
  .catch(res => console.error(res))
  }

}

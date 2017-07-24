

import Http from './Http'
import { troubleKindTop } from '../commons/apis'
import getTroubleKindArr from './getTroubleKindArr'

export default e => {
  const { id } = e.currentTarget.dataset
  const obj = {}
  obj.categoryId = id
  Http(troubleKindTop, 'post', true, obj)
  .then(res => {
    getTroubleKindArr()
  })
  .catch(res => console.error(res) )
}

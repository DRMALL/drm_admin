

import addPartRemark from './addPartRemark'
import setUpfiles from '../setUpfiles'
import { partRemark } from '../commons/apis'
import request from 'superagent'
import mocker from 'superagent-mocker'
import dispatch from './dispatch'
import store from '../commons/store'

let mock = mocker(request)
mock.post(`${partRemark}?partId*`, function(req){
  console.log('执行')
  return { body: { code: 201 } }
})
it('addPartRemark test', () => {
  dispatch('parts_test_addPartRemark', { machineId: 'xxx', remark:'xxxxx' })
  console.log(store.getState().part)
  // expect.assertions(1);
  addPartRemark()
  console.log('4')
    // expect(store.getState().part.machineId).toBe('peanut butter')

})

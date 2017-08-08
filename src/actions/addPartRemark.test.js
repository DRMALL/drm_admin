

import addPartRemark from './addPartRemark'
import setUpfiles from '../setUpfiles'
import { partRemark } from '../commons/apis'
import request from 'superagent'
import mocker from 'superagent-mocker'
import dispatch from './dispatch'
import store from '../commons/store'

let mock = mocker(request)
mock.post(`${partRemark}?partId*`, function(req){
  return { body: { code: 201 } }
})

it('addPartRemark test', () => {
  dispatch('parts_test_addPartRemark', { machineId: 'xxx', remark:'xxxxx' })
  expect.assertions(1);
  return addPartRemark()
  .then(res => {
    expect(store.getState().part.machineId).toBe(undefined)
  })
})

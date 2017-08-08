


import setUpfiles from '../setUpfiles'
import editMachineLocation from './editMachineLocation'
import store from '../commons/store'
import dispatch from './dispatch'
import request from 'superagent'
import mocker from 'superagent-mocker'
import { machineAction } from '../commons/apis'


let mock = mocker(request)
mock.put(`${machineAction}/*`, (req) => {
  return ( { body: { code: 201 } })
})

it('editMachineLocation test', () => {
  expect.assertions(1)
  return editMachineLocation('xxx')
  .then( res => expect(res.body.code).toBe(201) )
})

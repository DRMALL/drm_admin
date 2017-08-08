



import setUpfiles from '../setUpfiles'
import editMachine from './editMachine'
import store from '../commons/store'
import dispatch from './dispatch'
import request from 'superagent'
import mocker from 'superagent-mocker'
import { machineAction } from '../commons/apis'


let mock = mocker(request)
mock.put(`${machineAction}/*`, (req) => {
  return ( { body: { code: 201 } })
})

it('editMachine test', () => {
  dispatch('machine_test_default_value', { name: 'x', number: 'x', fileList: 'x', cc: 'x', pressure: 'x', combustible: 'x', description: 'x', address: 'x',   Taddress: 'x' })
  expect.assertions(1)
  return editMachine()
  .then( res => expect(store.getState().machine.status).toBe('edit machine success') )
})

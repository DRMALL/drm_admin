

import setUpfiles from '../setUpfiles'
import authorityDelById from './authorityDelById'
import store from '../commons/store'
import dispatch from './dispatch'
import request from 'superagent'
import mocker from 'superagent-mocker'
import { authDel } from '../commons/apis'


let mock = mocker(request)
mock.post(`${authDel}?authId*`, (req) => {
  return ( { body: { code: 201 } })
})

it('authorityDelById test', () => {
  dispatch('auth_post_test_authEditPost', { authId: 'xxx' })
  expect.assertions(1)
  return authorityDelById()
  .then( res => expect(store.getState().authority.status).toBe('del auth success') )
})

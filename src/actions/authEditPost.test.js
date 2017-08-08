

import setUpfiles from '../setUpfiles'
import authEditPost from './authEditPost'
import store from '../commons/store'
import dispatch from './dispatch'
import request from 'superagent'
import mocker from 'superagent-mocker'
import { authorityPut } from '../commons/apis'

let mock = mocker(request)
mock.post(`${authorityPut}?authId*`, (req) => {
  return ( { body: { code: 201 } })
})

it('authEditPost test', () => {
  dispatch('auth_post_test_authEditPost', { newAuthorityArr: [{ userId:'xx', deviceId: 'xxx', canView: true, canMonitor: false }] })
  expect.assertions(1)
  return authEditPost()
  .then( res => expect(store.getState().authority.status).toBe('edit post success') )
})



import setUpfiles from '../setUpfiles'
import authorityNew from './authorityNew'
import store from '../commons/store'
import dispatch from './dispatch'
import request from 'superagent'
import mocker from 'superagent-mocker'
import { newAuthority } from '../commons/apis'


let mock = mocker(request)
mock.post(`${newAuthority}?*`, (req) => {
  return ( { body: { code: 201 } })
})

it('authorityNew test', () => {
  dispatch('auth_post_test_authEditPost', { newAuthorityArr: [{
          userId: 'xx',
          deviceId: 'xxx',
          canView: true,
          canMonitor: false
        }] })
  expect.assertions(1)
  return authorityNew()
  .then( res => expect(store.getState().authority.status).toBe('new auth success') )
})

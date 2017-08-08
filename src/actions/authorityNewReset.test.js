



import authorityNewReset from './authorityNewReset'
import store from '../commons/store'
import dispatch from './dispatch'

it('authorityNewReset test', () => {
  dispatch('auth_post_test_authEditPost', { newAuthorityArr: [{
          userId: 'xx',
          deviceId: 'xx',
          canView: true,
          canMonitor: false
        }] })
  authorityNewReset()
  expect(store.getState().authority.status).toBe('newAuthorityArr reset')
})

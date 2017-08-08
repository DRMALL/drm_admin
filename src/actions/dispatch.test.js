

import dispatch from './dispatch'
import store from '../commons/store'

it('dispatch test', () => {
  dispatch('AUTHROITY_DEL_AUTH_SUCCESS')
  expect(store.getState().authority.status).toBe('del auth success')
})

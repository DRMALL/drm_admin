

import addUser from './addUser'
import store from '../commons/store'


it('addUser test', () => {
  addUser()
  expect(store.getState().user.status).toBe('short parameter')
})



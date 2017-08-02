

import authCheckChange from './authCheckChange'
import store from '../commons/store'
import dispatch from '../actions/dispatch'

it('authCheckChange test', () => {
  const newAuthorityArr = [
  { userId: '', deviceId: '', canView: false, canMonitor: false },
  { userId: '', deviceId: '', canView: false, canMonitor: false }]

  dispatch('AUTHORITY_TEST_AUTHORITY_ARR_CHANGE', newAuthorityArr )
  authCheckChange({ target: { id: 'canView', num: 0 } })
  expect(store.getState().authority.newAuthorityArr).toEqual([
  { userId: '', deviceId: '', canView: true, canMonitor: false },
  { userId: '', deviceId: '', canView: false, canMonitor: false }])
  authCheckChange({ target: { id: 'canMonitor', num: 1 } })
  expect(store.getState().authority.newAuthorityArr).toEqual([
  { userId: '', deviceId: '', canView: true, canMonitor: false },
  { userId: '', deviceId: '', canView: false, canMonitor: true }])
})

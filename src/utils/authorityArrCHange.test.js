

import authorityArrChange from './authorityArrChange'
import dispatch from '../actions/dispatch'
import store from '../commons/store'

it('authorityArrChange test', () => {
  const newAuthorityArr = [
  { userId: '', deviceId: '', canView: false, canMonitor: false },
  { userId: '', deviceId: '', canView: false, canMonitor: false }]
  const e = '1-45235ger'
  dispatch('AUTHORITY_TEST_AUTHORITY_ARR_CHANGE', newAuthorityArr )
  authorityArrChange(e)
  expect(store.getState().authority.newAuthorityArr).toEqual([
  { userId: '', deviceId: '', canView: false, canMonitor: false },
  { userId: '', deviceId: '45235ger', canView: false, canMonitor: false }])
  authorityArrChange('0-424324')
  expect(store.getState().authority.newAuthorityArr).toEqual([
  { userId: '', deviceId: '424324', canView: false, canMonitor: false },
  { userId: '', deviceId: '45235ger', canView: false, canMonitor: false }])
})



import addAuthorityInput from './addAuthorityInput'
import store from '../commons/store'

it('addAuthorityInput test', () => {
  addAuthorityInput()
  expect(store.getState().authority.newAuthorityArr.length).toBe(2)
  addAuthorityInput()
  expect(store.getState().authority.newAuthorityArr.length).toBe(3)
})

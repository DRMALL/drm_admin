

import arrHaveValue from './arrHaveValue'

it('test arrHaveValue', ()=> {
  const arr = [{userId: 'xx', deviceId: 'xxx',canView: true, canMonitor: false}, {userId: 'xx', deviceId: 'xxx', canView: true, canMonitor: false}]
  const array = [{userId: 'xx', deviceId: 'xxx'}, {userId: 'xx', deviceId: 'xxx'}]
  const arrays = [{userId: '', deviceId: 'xxx'}, {userId: '', deviceId: 'xxx'}]
  expect(arrHaveValue(arr)).toBe(true)
  expect(arrHaveValue(array)).toBe(false)
  expect(arrHaveValue(arrays)).toBe(false)
})

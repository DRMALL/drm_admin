

import whichSelect from './whichSelect'

it('测试sider函数转换', () =>{
  expect(whichSelect('/message')).toBe('信息推送')
  expect(whichSelect('/message/xxx')).toBe('信息推送')
  expect(whichSelect('/xxx/xxx')).toBe(null)
})

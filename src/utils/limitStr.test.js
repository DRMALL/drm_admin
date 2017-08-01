

import limitStr from './limitStr'

it('limitStr test', () => {
  let str = '这是一段测试的话，后面是需要隐藏的(哈哈)'
  expect(limitStr(str, 17)).toBe('这是一段测试的话，后面是需要隐藏的')
})

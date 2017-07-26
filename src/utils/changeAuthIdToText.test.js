

import changeAuthIdToText from './changeAuthIdToText'

it('test changeAuthIdToText', ()=> {
  const array = [{ name: '张三', _id: '456' },{ name: '李四', _id: '455' }]
  expect(changeAuthIdToText('456', array)).toBe('张三')
  // expect()
})

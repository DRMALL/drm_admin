

import beforeUpload from './beforeUpload'

it('beforeUpload test', () => {
  const file = {}
  file.size = 1024*400
  expect(beforeUpload(file)).toBe(true)
  file.size = 1024*600
  expect(beforeUpload(file)).toBe(false)
})

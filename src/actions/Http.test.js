
import Http from './Http'
import { messageAll } from '../commons/apis'

it.skip('测试http请求', () => {
  expect.assertions(1)
  return expect(Http( messageAll, 'get', false)).resolves.toBe('xxx')
})

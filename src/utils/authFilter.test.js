
import authFilter from './authFilter'

it('authFilter test', () => {
  const arr = [{name:'李四'}, {name:'张三'}, {name:'王二'}]
  const a = []
  expect(authFilter(arr)).toEqual([{name:"李四", text:"李四", value:"李四"}, {name:"张三", text:"张三", value:"张三"}, {name:"王二", text:"王二", value:"王二"}])
  expect(authFilter(a)).toEqual([{"text": "没有用户", "value": "没有用户"}])
})

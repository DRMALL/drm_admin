

import workOrderSelect from './workOrderSelect'
import store from '../commons/store'

it('workOrderSelect test', () => {
  const e = { currentTarget: { dataset: { type: '故障处理工单' } } }
  workOrderSelect(e)
  expect(store.getState().workOrder.whichDisplay).toBe('故障处理工单')
  const a = { currentTarget: { dataset: { type: '配件工单' } } }
  workOrderSelect(a)
  expect(store.getState().workOrder.whichDisplay).toBe('配件工单')
})

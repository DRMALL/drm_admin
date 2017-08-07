

import React from 'react'
import WorkOrderTable from './WorkOrderTable'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('WorkOrderTable test', () => {
  const state = { workOrder: { workOrder: [
    { title: '标题', content: 'asldjajtwe;ojawrw', user: 'admin', _id: '2323dsrw' },
    { title: '标题', content: 'asldjajtwe;ojawrw', user: 'admin', _id: '2323dsrds' }] } }
  const warpper = render(<WorkOrderTable state={ state } />)
  expect(toJson(warpper)).toMatchSnapshot()
})

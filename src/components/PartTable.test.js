

import React from 'react'
import PartTable from './PartTable'
import setUpfiles from '../setUpfiles'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('PartTable test', () => {
  const table = [{_id: 'sdd344', code:'d3560', name:'物料名称', model: '5dd43', },
                 {_id: 'sdd34d5', code:'d3546', name:'物料名称', model: '5dds5', }]
  const wrapper = render(<PartTable table={ table } /> )
  expect(toJson(wrapper)).toMatchSnapshot()
})

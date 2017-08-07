

import MachineTable from './MachineTable'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

it('MachineTable test', () => {
  const state = { machine: {
    machineArr: [{name: '张三', number: 'a1254', cc: '354', pressure: '30mpa', combustible: '汽油', _id: '4541342dsf', incharges:['daes', 'sdse']  },
    {name: '张三', number: 'a1254', cc: '354', pressure: '30mpa', combustible: '汽油',_id: '4541342dssdr', incharges:['daes', 'sdse']   }] }, machineModal: true }
  const wrapper = render(<MachineTable state={ state } />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

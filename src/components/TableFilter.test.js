

import React from 'react'
import TableFilter from './TableFilter'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('TableFilter test', () => {
  const fun = function(){}
  const arr = [{ _id:'dsae234', name: 'sdasr33' },{ _id:'dsae234', name: 'sdasr33' }]
  const wrapper = render(<TableFilter changeFun={ fun } arr={ arr } />)
  expect(toJson(wrapper)).toMatchSnapshot()
})



import React from 'react'
import TableTime from './TableTime'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('TableTime', ()=> {
  const wrapper = render(TableTime('2017-8-7 15:22', 15))
  expect(toJson(wrapper)).toMatchSnapshot()
})

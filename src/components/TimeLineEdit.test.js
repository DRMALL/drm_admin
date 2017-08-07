

import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'
import TimeLineEdit from './TimeLineEdit'

it('TimeLineEdit test', ()=> {
  const line_type = 'line_type'
  const line_des = 'line_des'
  const wrapper = render(<TimeLineEdit line_type={ line_type } line_des={ line_des } />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

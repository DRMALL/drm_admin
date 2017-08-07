

import TroubleTitle from './TroubleTitle'
import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('TroubleTitle test', () => {
  const head ={ title: '新增设备', tip: 'tip', path: '/machine/new' }
  const wrapper = render(<TroubleTitle head={ head } />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

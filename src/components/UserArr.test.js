

import React from 'react'
import UserArr from './UserArr'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('UserArr test', () => {
  const state = { user: { userArr: [{ key:0, name: '张三', email: '3255243@fsaer.com' },{ key:1, name: '李四', email: 'ds55243@fsaer.com' }] } }
  const wrapper = render(<UserArr state={ state } />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

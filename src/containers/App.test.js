

import React from 'react'
import App from './App'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('App test', () => {
  const wrapper = render(<App />)
  expect(toJson(wrapper)).toMatchSnapshot()
})



import TableTextHidden from './TableTextHidden'
import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'


it('TableTextHidden test', () => {
  const wrapper = render(TableTextHidden('sdarfs', 3))
  expect(toJson(wrapper)).toMatchSnapshot()
})

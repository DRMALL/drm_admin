

import TroubleTable from './TroubleTable'
import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('TroubleTable test', () => {
  const state = { trouble: { troubleArr: [{_id: 'sd345', title: 'z标题', content: 'sdaw34325235', category: { text: 'sfaer' } },{_id: 'sd3ds45', title: 'z标题', content: 'sdaw34325235',category: { text: 'sfaedsdr' } }] } }
  const wrapper = render(<TroubleTable state={ state } />)
  expect(toJson(wrapper)).toMatchSnapshot()
})

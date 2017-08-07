

import React from 'react'
import TroubleInput from './TroubleInput'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('TroubleInput test', ()=> {
  const state = { trouble: { title:'标题', troubleKinds: [] } }
  const wrapper = render(<TroubleInput state={ state } /> )
  expect(toJson(wrapper)).toMatchSnapshot()
})

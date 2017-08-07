

import React from 'react'
import TroubleKindArr from './TroubleKindArr'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'

it('TroubleKindArr test', () => {
  const troubleKinds = [{_id: 'sd4225', text: 'swdafrt text'},{_id: 'sd4sd25', text: 'swdafrt text'}]
  const wrapper = render(<TroubleKindArr troubleKinds= {troubleKinds} /> )
  expect(toJson(wrapper)).toMatchSnapshot()
})



import React from 'react'
import MessageHeader from './MessageHeader'
import renderer from 'react-test-renderer'

it('MessageHeader test', () => {
  const state = { message: { messageSelect: 'notsend' } }
  const tree = renderer.create(<MessageHeader state={ state } /> )
  expect(tree).toMatchSnapshot()
})

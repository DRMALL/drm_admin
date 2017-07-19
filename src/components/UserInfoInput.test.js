

import React from 'react'
import renderer from 'react-test-renderer'
import UserInfoInput from './UserInfoInput'

it('UserInfoInput snapshot test', () => {
  const tree = renderer.create(<UserInfoInput />)
  expect(tree).toMatchSnapshot()
})

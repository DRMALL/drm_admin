

import React from 'react'
import MachineHead from './MachineHead'
import renderer from 'react-test-renderer'

it('MachineHead snapshot test', () => {
  const tree = renderer.create(<MachineHead />)
  expect(tree).toMatchSnapshot()
})

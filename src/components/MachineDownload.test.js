

import React from 'react'
import renderer from 'react-test-renderer'
import MachineDownload from './MachineDownload'

it('MachineDownload test', () => {
  const tree = renderer.create(<MachineDownload />)
  expect(tree).toMatchSnapshot()
})

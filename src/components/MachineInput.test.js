

import MachineInput from './MachineInput'
import React from 'react'
import renderer from 'react-test-renderer'
import setUpfiles from '../setUpfiles'

it('MachineInput test', ()=> {
  const state = { machine: { fileList: [] } }
  const tree = renderer.create(<MachineInput state= { state } />)
  expect(tree).toMatchSnapshot()
})



import React from 'react'
import renderer from 'react-test-renderer'
import PartsRemarkInput from './PartsRemarkInput'

it('PartsRemarkInput test', () => {
  const machineArray = [{ _id: 'sdr34', number: 'a4355', name: '石油设备' },
                        { _id: 'sdr34ds', number: 'a435455', name: '石油设备' }]
  const tree = renderer.create(<PartsRemarkInput machineArray={ machineArray } />)
  expect(tree).toMatchSnapshot()
})

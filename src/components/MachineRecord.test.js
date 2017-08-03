

import React from 'react'
import renderer from 'react-test-renderer'
import MachineRecord from './MachineRecord'


it('MachineRecord test', () => {
  // const times =
  const line_type = '安装'
  const line_des = '第一次安装'
  const tree = renderer.create(<MachineRecord  line_type={ line_type }  line_des= { line_des } />)
  expect(tree).toMatchSnapshot()
})

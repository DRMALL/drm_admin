

import React from 'react'
import MachineTimeline from './MachineTimeline'
import renderer from 'react-test-renderer'


it('MachineTimeline test', () => {
  const timelines = [{line_type: '维修', line_des: '第一次维修' },
                     {line_type: '维修', line_des: '第一次维修' }]
  const tree = renderer.create(<MachineTimeline timelines={ timelines } />)
  expect(tree).toMatchSnapshot()
})

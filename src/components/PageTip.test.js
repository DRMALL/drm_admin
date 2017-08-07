

import PageTip from './PageTip'
import React from 'react'
import renderer from 'react-test-renderer'


it('PageTip test', ()=> {
  const tip = '标题示例'
  const tree = renderer.create(<PageTip tip={ tip } />)
  expect(tree).toMatchSnapshot()
})

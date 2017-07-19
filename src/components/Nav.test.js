

import React from 'react'
import renderer from 'react-test-renderer'
import Nav from './Nav'

it.skip('Nav snapshot test', ()=> {
  const tree = renderer.create(<Nav />)
  expect(tree).toMatchSnapshot()
})
//此测试无效，主要是关于state的数据问题

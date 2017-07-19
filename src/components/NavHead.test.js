

import NavHead from './NavHead'
import renderer from 'react-test-renderer'
import React from 'react'

it('中部导航渲染test', () =>{
  const tree = renderer.create(<NavHead/>)
  expect(tree).toMatchSnapshot()
})

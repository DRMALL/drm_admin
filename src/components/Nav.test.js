

import React from 'react'
import renderer from 'react-test-renderer'
import Nav from './Nav'
// import setUpfiles from '../setUpfiles'

it.skip('Nav snapshot test', ()=> {
  // afterEach(() => setUpfiles())

  const tree = renderer.create(<Nav />)
  expect(tree).toMatchSnapshot()

  // const wraaper = render( <Nav /> )
  // expect(toJson(wraaper)).toMatchSnapshot()
})
//此测试无效，主要是关于state的数据问题

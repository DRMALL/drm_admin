

import React from 'react'
import renderer from 'react-test-renderer'
import Nav from './Nav'
import setUpfiles from '../setUpfiles'

it('Nav snapshot test', ()=> {
  const state = { nav: {sliderSelect:'权限管理'} }

  const tree = renderer.create(<Nav state={ state } />)
  expect(tree).toMatchSnapshot()

})



import ContentLink from './ContentLink'
import renderer from 'react-test-renderer'
import React from 'react'

it('ContentLink test', () => {
  const path = '/trouble/new'
  const tip = '创建新信息'
  const tree = renderer.create(<ContentLink path={ path } tip={ tip } />)
  expect(tree).toMatchSnapshot()
})

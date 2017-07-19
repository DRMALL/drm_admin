

import React from 'react'
import ContentTitle from './ContentTitle'
import renderer from 'react-test-renderer'

it('contentTitle render test', () =>{
  const head = {}
  head.title = '故障排除'
  head.path = '/trouble/new'
  head.tip = '创建新信息'
  const tree = renderer.create(<ContentTitle head={ head } />)
  expect(tree).toMatchSnapshot()
})




import React from 'react'
import ContentTitle from './ContentTitle'
import renderer from 'react-test-renderer'
// import { render, shallow,mount } from 'enzyme'
// import toJson from 'enzyme-to-json'


// it('contentTitle render test', () => {
//   const head = {}
//   head.title = '故障排除'
//   head.path = '/trouble/new'
//   head.tip = '创建新信息'
//   const tree = shallow(<ContentTitle head={ head } />)
//   expect(toJson(tree)).toMatchSnapshot()
// })

it('contentTitle render test', () =>{
  const head = {}
  head.title = '故障排除'
  head.path = '/trouble/new'
  head.tip = '创建新信息'
  const tree = renderer.create(<ContentTitle head={ head } />)
  expect(tree).toMatchSnapshot()
})


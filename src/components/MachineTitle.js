



import React from 'react'
import PageTip from './PageTip'
import ContentLink from './ContentLink'
import { Link } from 'react-router'


const TroubleTitle = ({ head }) => (
  <div className='trouble-title' >
    <PageTip tip={ head.title } />
    <div className='trouble-title-right' >
      <Link to='/machine/kind' className='trouble-title-kind' >分类管理</Link>
      <ContentLink tip = { head.tip } path={ head.path } />
    </div>
  </div>
  )

// const TroubleTitle = ({ head }) => (
//   <div className='trouble-title' >
//     <PageTip tip={ head.title } />
//     <ContentLink tip = { head.tip } path={ head.path } />
//   </div>
//   )

export default TroubleTitle




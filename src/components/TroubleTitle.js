



import React from 'react'
import PageTip from './PageTip'
import ContentLink from './ContentLink'
import { Link } from 'react-router'


const TroubleTitle = ({ head }) => (
  <div className='trouble-title' >
    <PageTip tip={ head.title } />
    <div className='trouble-title-right' >
      <Link to='/trouble/kind' className='trouble-title-kind' >分类管理</Link>
      <ContentLink tip = { head.tip } path={ head.path } />
    </div>
  </div>
  )

export default TroubleTitle


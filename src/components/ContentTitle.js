

import React from 'react'
import PageTip from './PageTip'
import ContentLink from './ContentLink'


const ContentTitle = ({ head }) => (
  <div className='content-head' >
    <div className='content-head-left' >
      <PageTip tip={ head.title } />
    </div>
    <ContentLink tip = { head.tip } path={ head.path } />
  </div>
  )

export default ContentTitle




import React from 'react'
import { Link } from 'react-router'
import Icon from 'antd/lib/icon'

const ContentLink = ({path, tip}) => (
    <Link to={ path } className='content-link' >
      <div className='content-link-block' ><Icon type="plus" /></div>
      <div className='content-link-text' >{ tip }</div>
    </Link>
  )

export default ContentLink

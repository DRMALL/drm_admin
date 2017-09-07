

import React from 'react'
import PageTip from '../components/PageTip'
import { browserHistory } from 'react-router'

export default props => {
  const { tip } = props
  return (
    <div className='parttitle' >
      <PageTip tip={ tip } />
      <div className='parttitle-right' onClick={ navToupload } >导入数据</div>
    </div>
    )
}

function navToupload(){
  browserHistory.push('/parts/upload')
}


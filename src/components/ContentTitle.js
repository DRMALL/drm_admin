

import React from 'react'
import { Link } from 'react-router'
import Icon from 'antd/lib/icon'

const ContentTitle = ({ head }) => (
  <div className='content-head' >
    <div className='content-head-left' >{ head.title }</div>
    <Link to={ head.path } className='content-head-right' >
      <div className='content-head-right-block' ><Icon type="plus" /></div>
      <div className='content-head-right-text' >{ head.tip }</div>
    </Link>
  </div>
  )

export default ContentTitle

// export default head => {
//   console.log(head)
//   return(
//     <div className='content-head' >
//       <div className='content-head-left' >{ head.title }</div>
//       <Link to={ head.path } className='content-head-right' >
//         <div className='content-head-right-block' ><Icon type="plus" /></div>
//         <div className='content-head-right-text' >{ head.tip }</div>
//       </Link>
//     </div>
//     )
// }

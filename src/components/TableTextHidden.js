

import React from 'react'
import Tooltip from 'antd/lib/tooltip'
import textHidden from '../utils/textHidden'

function TableTextHidden(str, num){
  if(typeof str === 'string')
  return(
    <Tooltip title={ str } >
      <div>{ textHidden( str, num ) }</div>
    </Tooltip>
    )
  else return
}

export default TableTextHidden

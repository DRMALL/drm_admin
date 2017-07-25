

import React from 'react'
import Popover from 'antd/lib/popover'

function TableAddress(str){
  if(typeof str === 'string'){
    const arr = str.split('-')
    let array = arr.slice(0,5)
    const content = (
      <div>
        {
          array.map((item, index) =>
            <div key={ index } >{ item }</div>)
        }
      </div>
      )
    return(
      <Popover title='地址' content={ content } >
        <div>{ arr[0] }</div>
      </Popover>
      )
  }
  else return
}

export default TableAddress

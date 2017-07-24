
import React from 'react'


function TableTime(str, num){
  if(typeof str === 'string')
  return (
    <div>
      <div>{ str ? str.split(' ')[0] : '' }</div>
      <div style={{ marginLeft: num }} >{ str ? str.split(' ')[1] : '' }</div>
    </div>
    )
else return
}

export default TableTime

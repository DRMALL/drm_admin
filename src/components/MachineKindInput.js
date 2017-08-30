

import React from 'react'
import Input from 'antd/lib/input'
import getInputValue from '../actions/getInputValue'

export default props => {
  const { id, func, value } = props
  return (
    <div style={{ display: 'flex' }} >
      <Input data-path='MACHINE' data-id={ id } onChange={ getInputValue }
             style={{ width:300 }} value={ value } />
      <div style={{ display: 'flex', marginLeft: 30 }} >
        <div onClick={ func } className='machine-edit-btn' >添加</div>
      </div>
    </div>
    )
}

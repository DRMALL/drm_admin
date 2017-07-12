


import React from 'react'
import { Link } from 'react-router'
import Icon from 'antd/lib/icon'
import Input from 'antd/lib/input'
import searchMachine from '../actions/searchMachine'

const machineHead = () => (
  <div className='machine-head' >
    <div className='machine-head-left' >设备管理</div>
    <Input.Search className='machine-head-input' style={{ width: 300 }}
           placeholder='请输入关键词搜索设备' onChange={ searchMachine } />
    <Link to='/machine/new' className='machine-head-right' >
      <div className='machine-head-right-block' ><Icon type="plus" /></div>
      <div className='machine-head-right-text' >添加新设备</div>
    </Link>
  </div>
  )

export default machineHead


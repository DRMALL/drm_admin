

import Table from 'antd/lib/table'
import React from 'react'
import TableTime from './TableTime'
import TableTextHidden from './TableTextHidden'
import TableAddress from './TableAddress'
import { browserHistory } from 'react-router'

export default props => {
  const { machineArr } = props.state.machine
  const columns =[{
    title: '设备名称',
    dataIndex: 'name',
    key: 'name'
  },{
    title: '设备编号',
    dataIndex: 'number',
    key: 'number'
  },{
    title: '排量',
    dataIndex: 'cc',
    key: 'cc'
  },{
    title: '压力',
    dataIndex: 'pressure',
    key: 'pressure'
  },{
    title: '燃料',
    dataIndex: 'combustible',
    key: 'combustible'
  },{
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    render: text => TableTextHidden( text, 10)
  },{
    title: '负责人',
    dataIndex: 'xx',
    key: 'xx'
  },{
    title: '所在地',
    dataIndex: 'address',
    key: 'address',
    render: text => TableAddress(text)
  },{
    title: '添加时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: text => TableTime(text, 15)
  },{
    title: '操作',
    key: 'action',
    render: (text, record) =>(
      <div className='machine-table-action' >
        <div className='machine-table-left' data-machine-id={ text._id }
             onClick={ navToMachineEdit } >
          <i className="iconfont icon-compile" style={{ fontSize:20 }} ></i>
        </div>
        <div className='machine-table-right' data-machine-id={ text._id }
             onClick={ navToMachineControl } >
          <i className="iconfont icon-details" ></i>
        </div>
      </div>
      )
  },]
  return(
    <div>
      <Table dataSource={ machineArr } columns={ columns } rowKey='_id' />
    </div>
    )
}

function navToMachineEdit(e){
  const { machineId } = e.currentTarget.dataset
  localStorage.setItem('machineId', machineId)
  browserHistory.push('/machine/edit')
}

function navToMachineControl(e){
  const { machineId } = e.currentTarget.dataset
  localStorage.setItem('machineId', machineId)
  browserHistory.push('/machine/control')
}

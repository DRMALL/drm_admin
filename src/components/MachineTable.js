

import Table from 'antd/lib/table'
import React from 'react'
import TableTime from './TableTime'
import TableTextHidden from './TableTextHidden'
// import TableAddress from './TableAddress'
import { browserHistory } from 'react-router'
import Modal from 'antd/lib/modal'
import machineDelById from '../actions/machineDelById'
import dispatch from '../actions/dispatch'

export default props => {
  const { machineArr, machineModal } = props.state.machine
  const columns =[{
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    width: '10%'
  },{
    title: '设备编号',
    dataIndex: 'number',
    key: 'number',
    width: '10%'
  },{
    title: '排量',
    dataIndex: 'cc',
    key: 'cc',
    width: '10%'
  },{
    title: '压力',
    dataIndex: 'pressure',
    key: 'pressure',
    width: '10%'
  },{
    title: '燃料',
    dataIndex: 'combustible',
    key: 'combustible',
    width: '10%',
  },{
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    width: '10%',
    render: text => TableTextHidden( text, 10)
  },{
    title: '负责人',
    dataIndex: 'incharges',
    width: '10%',
    render: text => <div>{text.slice(0,4).join(', ')}</div>
  },{
    title: '所在地',
    dataIndex: 'address',
    key: 'address',
    width: '10%',
    // render: text => TableAddress(text)
  },{
    title: '添加时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: '10%',
    sorter: (a,b) => new Date(a.createdAt) - new Date(b.createdAt),
    render: text => TableTime(text, 15)
  },{
    title: '操作',
    key: 'action',
    width: '10%',
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
      <Modal title='提示' visible={ machineModal } okText='确定' cancelText='取消'
             onOk={ machineDelById } onCancel={ cancleDelAuth }  >
        <p>确定删除此设备？</p>
      </Modal>
    </div>
    )
}

// function delMachinexx(e){
//   dispatch('MACHINE_GET_DEL_MACHINE_ID', e.currentTarget.dataset.machineId)
// }

function cancleDelAuth(){
  dispatch('MACHINE_CANCLE_DEL_MACHINE')
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

//设备删除
        // <div className='message-arr-item' onClick={ delMachinexx } data-machine-id={ record._id }  >
        //   <i className="iconfont icon-shanchu message-del-icon"  ></i>
        // </div>

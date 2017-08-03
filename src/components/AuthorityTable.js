

import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import TableTime from './TableTime'
import moment from 'moment'
import dispatch from '../actions/dispatch'
import store from '../commons/store'
import TableFilter from './TableFilter'
import Modal from 'antd/lib/modal'
import authorityDelById from '../actions/authorityDelById'

export default props => {
  const { authorityArray, userNameArr, machineNameArr, authModal } = props
  const columns = [{
    title: '用户',
    dataIndex: 'user.name',
    filterDropdown: ( <TableFilter changeFun={ handleChangexx } arr={ userNameArr } /> )
  },{
    title: '查看权限',
    dataIndex: 'canView',
    render: text =>
    <div>{ text ? '有' : '无' }</div>
  },{
    title: '监控权限',
    dataIndex: 'canMonitor',
    render: text =>
    <div>{ text ? '有' : '无' }</div>
  },{
    title: '设备名称',
    dataIndex: 'device.name',
    filterDropdown: ( <TableFilter changeFun={ handleChangeMachine } arr={ machineNameArr } /> )
  },{
    title: '修改时间',
    dataIndex: 'updatedAt',
    render: text => TableTime(moment(text).format('YYYY-MM-DD HH:mm'), 15)
  },{
    title: '操作',
    key:'action',
    render: (text, record) => (
      <div className='user-arr-action' >
        <div className='user-arr-item'  style={{ color: '#579df2' }}
             onClick={ navToEditAuth } data-auth-id={ record._id } >
          <i className="iconfont icon-compile trouble-table-icon"  style={{ color: '#0068d2' }} ></i>
        </div>
        <div className='user-arr-item' onClick={ delAuth } data-auth-id={ record._id }  >
          <i className="iconfont icon-shanchu message-del-icon"  ></i>
        </div>
      </div>
      )
  }]
  return(
    <div>
      <Table columns={columns} dataSource={authorityArray} rowKey='_id' />
      <Modal title='提示' visible={ authModal } okText='确定' cancelText='取消'
             onOk={ authorityDelById } onCancel={ cancleDelAuth } >
             <p>确定删除此权限？</p>
      </Modal>
    </div>
    )
}

function navToEditAuth(e){
  const { authId } = e.currentTarget.dataset
  localStorage.setItem('authId', authId)
  browserHistory.push('/authority/edit')
}

function handleChangexx(e){
  const { TauthorityArray } = store.getState().authority
  if(e){
  let arr = TauthorityArray.filter(item => item.user._id === e )
  dispatch('AUTHORITY_FILTER_VALUE_TABLE', arr)
  }
  else dispatch('AUTHORITY_FILTER_VALUE_TABLE', TauthorityArray)
}

function handleChangeMachine(e){
  const { TauthorityArray } = store.getState().authority
  if(e){
  let arr = TauthorityArray.filter(item => item.device._id === e )
  dispatch('AUTHORITY_FILTER_VALUE_TABLE', arr)
  }
  else dispatch('AUTHORITY_FILTER_VALUE_TABLE', TauthorityArray)
}

function delAuth(e){
  const { authId } = e.currentTarget.dataset
  dispatch( 'AUTHORITY_DEL_GET_AUTHID', authId )
}

function cancleDelAuth(){
  dispatch('AUTHORITY_CANCLE_DEL_AUTH')
}

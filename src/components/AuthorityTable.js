

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
import delIcon from '../images/dels.png'
import getAuthorityArr from '../actions/getAuthorityArr'

export default props => {
  const { authorityArray, userNameArr, machineNameArr, authModal, meta } = props
  const columns = [{
    title: '用户',
    dataIndex: 'user.name',
    width: '20%',
    filterDropdown: ( <TableFilter changeFun={ handleChangexx } arr={ userNameArr } /> )
  },{
    title: '查看权限',
    dataIndex: 'canView',
    width: '10%',
    render: text =>
    <div>{ text ? '有' : '无' }</div>
  },{
    title: '监控权限',
    dataIndex: 'canMonitor',
    width: '10%',
    render: text =>
    <div>{ text ? '有' : '无' }</div>
  },{
    title: '设备名称',
    dataIndex: 'device.name',
    width: '25%',
    filterDropdown: ( <TableFilter changeFun={ handleChangeMachine } arr={ machineNameArr } /> )
  },{
    title: '修改时间',
    dataIndex: 'updatedAt',
    width: '10%',
    render: text => TableTime(moment(text).format('YYYY-MM-DD HH:mm'), 15)
  },{
    title: '操作',
    key:'action',
    width: '10%',
    render: (text, record) => (
      <div className='table-icon-content' >
        <div className='table-icon-item'  style={{ color: '#579df2' }}
             onClick={ navToEditAuth } data-auth-id={ record._id } >
          <i className="iconfont icon-compile trouble-table-icon"  style={{ color: '#0068d2', fontSize:25 }} ></i>
        </div>
        <div className='table-icon-item' onClick={ delAuth } data-auth-id={ record._id }  >
          <img src={ delIcon } alt='删除' style={{ width:20,height:20 }} />
        </div>
      </div>
      )
  }]

  const pagination = {
    total: meta ? meta.count : 10,
    onChange(page, size) {
      let offset = (page - 1) * size
      getAuthorityArr(offset)
    }
  }

  return(
    <div>
      <div style={{paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
        <Table columns={columns} dataSource={authorityArray} rowKey='_id' pagination={pagination}/>
      </div>
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

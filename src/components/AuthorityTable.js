

import React from 'react'
import Table from 'antd/lib/table'
import Icon from 'antd/lib/icon'
import { browserHistory } from 'react-router'
import TableTime from './TableTime'
import moment from 'moment'
import Select from 'antd/lib/select'
import dispatch from '../actions/dispatch'
import store from '../commons/store'
import TableFilter from './TableFilter'
// import authFilter from '../utils/authFilter'

export default props => {
  const { authorityArray, userNameArr } = props.state.authority
  const columns = [{
    title: '用户',
    dataIndex: 'user.name',
    // filters: authFilter(userNameArr),
    // filterMultiple: false,
    // onFilter: (value, record) => record.user.name.indexOf(value) === 0,
    //需要传递的参数有 onChange函数, 列表数组
    filterDropdown: ( <TableFilter changeFun={ handleChangexx } arr={ userNameArr } /> )
    // filterDropdown: (
    //     <Select
    //       showSearch
    //       style={{ width: 200 }}
    //       placeholder="点击下拉列表选择或者输入搜索"
    //       Focus = { true }
    //       optionFilterProp="children"
    //       allowClear= { true }
    //       onChange={handleChangexx}
    //       filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    //     >
    //     {
    //       userNameArr.map(item =>
    //         <Select.Option key={item._id} value={item._id} >{ item.name }</Select.Option>)
    //     }
    //     </Select>
    //   ),
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
             onClick={ navToEditAuth } data-auth-id={ record._id } ><Icon type="edit" /></div>
      </div>
      )
  }]
  return(
    <div>
      <Table columns={columns} dataSource={authorityArray} rowKey='_id' />
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

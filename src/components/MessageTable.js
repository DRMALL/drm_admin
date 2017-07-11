

import React from 'react'
import Table from 'antd/lib/table'
import Icon from 'antd/lib/icon'


export default props => {
  const { authorityArray } = props.state.authority
  const columns = [{
    title: '标题',
    dataIndex: 'title',
    key: 'title'
  },{
    title: '摘要',
    dataIndex: 'tip',
    key: 'tip'
  },{
    title: '作者',
    dataIndex: 'authour',
    key: 'authour'
  },{
    title: '状态',
    dataIndex: 'status',
    key: 'status'
  },{
    title: '创建时间',
    dataIndex: 'time',
    key: 'time'
  },{
    title: '推送时间',
    dataIndex: 'pushTime',
    key: 'pushTime'
  },{
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <div className='user-arr-action' >
        <div className='user-arr-item'  style={{ color: '#579df2' }}
             onClick={ editUser } data-user-id={ record._id } ><Icon type="edit" /></div>
        <div className='user-arr-item' ><Icon type="delete" /></div>
      </div>
      )
  },]
  return(
    <div>
      <Table dataSource={ authorityArray } columns={ columns } />
    </div>
    )
}

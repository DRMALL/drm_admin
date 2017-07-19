

import React from 'react'
import Table from 'antd/lib/table'
import Icon from 'antd/lib/icon'
import { browserHistory } from 'react-router'

export default props => {
  const { authorityArray } = props.state.authority
  const columns = [{
    title: '用户',
    dataIndex: 'name',
    key:'name'
  },{
    title: '查看权限',
    dataIndex: 'see',
    key:'see'
  },{
    title: '监控权限',
    dataIndex: 'monitor',
    key:'monitor'
  },{
    title: '设备名称',
    dataIndex: 'proName',
    key:'proName'
  },{
    title: '修改时间',
    dataIndex: 'time',
    key:'time'
  },{
    title: '操作',
    key:'action',
    render: (text, record) => (
      <div className='user-arr-action' >
        <div className='user-arr-item'  style={{ color: '#579df2' }}
             onClick={ navToNewAuth } data-user-id={ record._id } ><Icon type="edit" /></div>
        <div className='user-arr-item' ><Icon type="delete" /></div>
      </div>
      )
  }]
  return(
    <div>
      <Table columns={columns} dataSource={authorityArray} />
    </div>
    )
}

function navToNewAuth(e){
  // const { userId } = e.currentTarget.dataset
  browserHistory.push('/authority/new')
}

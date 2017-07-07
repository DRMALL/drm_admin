

import React from 'react'
import Table from 'antd/lib/table'

export default props => {
  const { userArr } = props.state.user
  const columns = [{
    title: '用户名称',
    dataIndex: 'name',
    key:'name'
  },{
    title: '用户邮箱',
    dataIndex: 'mail',
    key:'mail'
  },{
    title: '联系电话',
    dataIndex: 'phone',
    key:'phone'
  },{
    title: '公司名称',
    dataIndex: 'company',
    key:'company'
  },{
    title: '通讯地址',
    dataIndex: 'address',
    key:'address'
  },{
    title: '创建时间',
    dataIndex: 'time',
    key:'time'
  }]
  return(
    <div>
      <Table columns={columns} dataSource={userArr} />
    </div>
    )
}

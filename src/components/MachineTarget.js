

import Table from 'antd/lib/table'
import React from 'react'

export default props => {
  const { arr } = props
  console.log(arr)
  const columns =[{
    title: '指标名称',
    dataIndex: 'key',
    width: 120
  },{
    title: '值',
    dataIndex: 'value',
    width: 120
  }]
  return(
    <div style={{ width: 480, marginTop: 22, border: '2px solid #f7f7f7' }} >
      <Table dataSource={ arr } columns={ columns } rowKey='key' />
    </div>
    )
}

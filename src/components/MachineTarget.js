

import Table from 'antd/lib/table'
import React from 'react'

export default props => {
  const { arr } = props
  arr.map((item, index) => {
    item.key = index
    if (item.value == 0) {
      item.value = '关闭'
      item.unitName = '开关'
    }
    else if(item.value == 1) {
      item.value = '打开'
      item.unitName = '开关'
    }
  })
  const columns =[{
    title: '指标',
    dataIndex: 'quotaName',
    width: 220
  },{
    title: '数值',
    dataIndex: 'value',
    width: 120
  },{
    title: '单位',
    dataIndex: 'unitName',
    width: 80
  }]
  return(
    <div style={{ width: 480, marginTop: 22, border: '2px solid #f7f7f7' }} >
      <Table pagination={false} dataSource={ arr } columns={ columns } rowKey={ arr.key}/>
    </div>
    )
}

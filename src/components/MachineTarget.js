

import Table from 'antd/lib/table'
import React from 'react'

export default props => {
  const machineTargetArr= [{
    name: '氧气入口压力1',
    num: 'NN.NN'
  },{
    name: '氧气流量1',
    num: 'NN.NN'
  },{
    name: '氧气累计流量1',
    num: 'NN.NN'
  },{
    name: '天然气入口压力1',
    num: 'NN.NN'
  },{
    name: '天然气出口压力2',
    num: 'NN.NN'
  },{
    name: '天然气流量1',
    num: 'NN.NN'
  },{
    name: '天然气流量2',
    num: 'NN.NN'
  }]
  const columns =[{
    title: '指标名称',
    dataIndex: 'name',
    key: 'name',
    width: 120
  },{
    title: '值',
    dataIndex: 'num',
    key: 'num',
    width: 120
  }]
  return(
    <div style={{ width: 480, marginTop: 22, border: '2px solid #f7f7f7' }} >
      <Table dataSource={ machineTargetArr } columns={ columns } rowKey='name' />
    </div>
    )
}

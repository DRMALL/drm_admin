

import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import TableTextHidden from './TableTextHidden'

const PartTable = ({ table }) => {
  const columns =[{
    title: '物料代码',
    dataIndex: 'code',
    width: '10%',
  },{
    title: '物料名称',
    dataIndex: 'name',
    width: '15%',
  },{
    title: '规格型号',
    dataIndex: 'model',
    width: '15%',
  },{
    title: '件／台／套',
    dataIndex: 'reserve',
    width: '10%',
  },{
    title: '类型',
    dataIndex: 'types',
    width: '10%',
  },{
    title: '备注',
    dataIndex: 'remark',
    width: '20%',
    render: text => TableTextHidden(text, 30)
  },{
    title: '添加时间',
    dataIndex: 'time',
    width: '10%',
  },{
    title: '操作',
    key: 'action',
    width: '10%',
    render: (text, record) =>
    <div data-part-id={ record._id } onClick={ getPartId } >
      <i className="iconfont icon-compile trouble-table-icon"   style={{ color: '#0068d2', fontSize:25 }} ></i>
    </div>
  }]
  return (
    <Table dataSource={ table } columns={ columns } rowKey='_id' />
    )
}

function getPartId(e){
  localStorage.setItem('partId', e.currentTarget.dataset.partId )
  browserHistory.push('/parts/remark')
}

export default PartTable

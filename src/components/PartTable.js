

import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import TableTextHidden from './TableTextHidden'

const PartTable = ({ table }) => {
  const columns =[{
    title: '物料代码',
    dataIndex: 'code',
  },{
    title: '物料名称',
    dataIndex: 'name',
  },{
    title: '规格型号',
    dataIndex: 'model',
  },{
    title: '件／台／套',
    dataIndex: 'reserve',
  },{
    title: '类型',
    dataIndex: 'types',
  },{
    title: '备注',
    dataIndex: 'remark',
    render: text => TableTextHidden(text, 30)
  },{
    title: '添加时间',
    dataIndex: 'time',
  },{
    title: '操作',
    key: 'action',
    render: (text, record) =>
    <div data-part-id={ record._id } onClick={ getPartId } >
      <i className="iconfont icon-compile trouble-table-icon"  style={{ color: '#0068d2' }} ></i>
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

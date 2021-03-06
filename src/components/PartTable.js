import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import TableTextHidden from './TableTextHidden'
import TableTime from './TableTime'
import moment from 'moment'
import getPartArr from '../actions/getPartArr'
// import delIcon from '../images/dels.png'

const PartTable = ({ table, meta }) => {
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
    title: '单位',
    dataIndex: 'unit',
    width: '10%',
  },{
    title: '备注',
    dataIndex: 'remark',
    width: '30%',
    render: text => TableTextHidden(text, 30)
  },{
    title: '添加时间',
    dataIndex: 'createdAt',
    width: '10%',
    render: text => TableTime(moment(text).format('YYYY-MM-DD HH:mm'), 15)
  },{
    title: '操作',
    key: 'action',
    width: '10%',
    render: (text, record) =>
    <div data-part-id={ record._id } onClick={ getPartId } >
      <i className="iconfont icon-compile trouble-table-icon"   style={{ color: '#0068d2', fontSize:25 }} ></i>
    </div>
  }]

  const pagination = {
    total: meta ? meta.count : 10,
    onChange(page, size) {
      let offset = (page - 1) * size
      getPartArr(offset)
    }
  }

  return (
    <div style={{paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
      <Table dataSource={ table } columns={ columns } rowKey='_id' pagination={pagination}/>
    </div>
    )
}

function getPartId(e){
  localStorage.setItem('partId', e.currentTarget.dataset.partId )
  browserHistory.push('/parts/remark')
}

export default PartTable

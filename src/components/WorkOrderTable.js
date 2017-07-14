

import React from 'react'
import Table from 'antd/lib/table'
import Tooltip from 'antd/lib/tooltip'
import textHidden from '../utils/textHidden'
import { browserHistory } from 'react-router'


export default props => {
  const { workOrder } = props.state.workOrder
  // console.log(props)
  const columns = [{
    title:'标题',
    dataIndex: 'title',
    key: 'title',
    width: '15%',
  },{
    title:'内容',
    dataIndex: 'content',
    key: 'content',
    width: '30%',
    render: text =>
    <Tooltip title={ text } >
      <div>{ textHidden(text, 40) }</div>
    </Tooltip>
  },{
    title:'提问人',
    dataIndex: 'user',
    key: 'user',
    width: '10%',
  },{
    title:'状态',
    dataIndex: 'isHanlded',
    key: 'isHanlded',
    width: '10%',
  },{
    title:'用户反馈',
    dataIndex: 'isDone',
    key: 'isDone',
    width: '15%',
    render: text =>
      <div style={{ color: text==='已解决'?'#27b24a': '#d0011b' }} >{text}</div>
  },{
    title:'修改时间',
    dataIndex: 'updatedAtTime',
    key: 'updatedAtTime',
    width: '10%',
    render: text =>
    <div>
      <div>{ text.split(' ')[0] }</div>
      <div style={{ marginLeft: 12 }} >{ text.split(' ')[1] }</div>
    </div>
  },{
    title:'操作',
    dataIndex: 'action',
    width: '10%',
    render: (text, record) =>
      <div style={{ cursor: 'pointer' }} data-order-id={ record._id }
           onClick={ navToOrderEdit } >
        <i className="iconfont icon-compile" style={{ color: '#579df2' }} ></i>
      </div>
  },]
  return(
    <div>
      <Table columns={ columns } dataSource={ workOrder } rowKey={ record => record._id } />
    </div>
    )
}

function navToOrderEdit(e){
  const { orderId } = e.currentTarget.dataset
  localStorage.setItem('workOrderId', orderId)
  browserHistory.push('/workOrder/edit')
}

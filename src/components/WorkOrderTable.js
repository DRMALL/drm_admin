

import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import TableTextHidden from './TableTextHidden'
import TableTime from './TableTime'
import getRichEditorValue from '../utils/getRichEditorValue'
import dispatch from '../actions/dispatch'
import workOrderDelById from '../actions/workOrderDelById'
import Modal from 'antd/lib/modal'
import delIcon from '../images/dels.png'


export default props => {
  const { workOrder, isShowModal } = props.state.workOrder
  console.log(workOrder)
  const columns = [{
    title:'标题',
    dataIndex: 'title',
    key: 'title',
    width: '15%',
    render: text => <div>
      {
        text.length > 40 ? <div>{text.slice(0,40)+ '...'}</div> : <div>{text}</div>
      }
    </div>
  },{
    title:'内容',
    dataIndex: 'content',
    key: 'content',
    width: '30%',
    render: text =>
    <div>
    {
      text[0]==='<' ? TableTextHidden( getRichEditorValue(text), 40 ) :
      TableTextHidden( text, 40 )
     }
    </div>
  },{
    title:'提问人',
    dataIndex: 'user.name',
    width: '10%',
    render: text =>  TableTextHidden( text, 10 )
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
    render: text => TableTime(text, 15)
  },{
    title:'操作',
    dataIndex: 'action',
    width: '10%',
    render: (text, record) =>
      <div className='table-icon-content' >
        <div  data-order-id={ record._id }
             onClick={ navToOrderEdit } className='table-icon-item' >
          <i className="iconfont icon-compile" style={{ color: '#579df2', fontSize: 25 }} ></i>
        </div>
        <div className='table-icon-item' onClick={ delWorkOrderxx } data-work-order-id={ record._id }  >
          <img src={ delIcon } alt='删除' style={{ width:20,height:20 }} />
        </div>
      </div>
  },]
  return(
    <div>
      <Table columns={ columns } dataSource={ workOrder } rowKey={ record => record._id } />
      <Modal title='提示' visible={ isShowModal } okText='确定' cancelText='取消'
             onOk={ workOrderDelById } onCancel={ cancleDel }  >
        <p>确定删除此工单？</p>
      </Modal>
    </div>
    )
}

function delWorkOrderxx(e){
  const { workOrderId } = e.currentTarget.dataset
  dispatch('WORKORDER_GET_DEL_ORDER_ID', workOrderId)
}

function cancleDel(){
  dispatch('WORKORDER_CANCLE_ORDER')
}

function navToOrderEdit(e){
  const { orderId } = e.currentTarget.dataset
  localStorage.setItem('workOrderId', orderId)
  browserHistory.push('/workOrder/edit')
}

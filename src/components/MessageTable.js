

import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import Modal from 'antd/lib/modal'
import messageChangeStatus from '../actions/messageChangeStatus'
import messageDel from '../actions/messageDel'
import TableTextHidden from './TableTextHidden'
import TableTime from './TableTime'

//本页面没有配置好table，还是使用了复制。。
export default props => {
  const { messageArr, messageSelect } = props.state.message
  const columns = [{
    title: '标题',
    dataIndex: 'title',
    width: '20%',
    key: 'title',
    render: text => TableTextHidden(text, 25)
  },{
    title: '摘要',
    dataIndex: 'abstract',
    width: '20%',
    key: 'abstract',
    render: text => TableTextHidden(text, 25)
  },{
    title: '作者',
    dataIndex: 'author',
    width: '5%',
    key: 'author'
  },{
    title: '状态',
    dataIndex: 'status',
    width: '5%',
    key: 'status'
  },{
    title: '创建时间',
    dataIndex: 'createdAt',
    width: '10%',
    key: 'createdAt',
    render: text => TableTime(text, 15)
  },{
    title: '发布时间',
    dataIndex: messageSelect==='send' ? 'publish_time' : '',
    width: '10%',
    key: 'publish_time',
    // render: (text, record )=>
    //     <div>
    //       {
    //        text==='Invalid date' ? TableTime(record.createdAt, 15): TableTime(text, 15)
    //       }
    //     </div>
    render: text => TableTime(text, 15)
  },{
    title: '操作',
    key: 'action',
    width: '15%',
    render: (text, record) => (
      <div className='table-icon-content' >
        <div className='table-icon-item' onClick={ delMessagexx } data-message-id={ record._id }  >
          <i className="iconfont icon-shanchu del-icon" style={{ fontSize: 20 }} ></i>
        </div>
        <div className='table-icon-item'  style={{ color: '#579df2' }}
             onClick={ editMessagexx } data-message-id={ record._id } >
             <i className="iconfont icon-compile  edit-icon" style={{ fontSize:25 }} ></i>
        </div>
        <div className='table-icon-item' style={{ display: messageSelect==='send' ? 'none' : 'block' }} onClick={ confirSendxx } data-message-id={ record._id } >
          <i className="iconfont icon-fasong  send-icon" style={{ fontSize:15 }}  ></i>
        </div>
      </div>
      )
  },]

  const columnnosend = [{
    title: '标题',
    dataIndex: 'title',
    width: '20%',
    key: 'title',
    render: text => TableTextHidden(text, 25)
  },{
    title: '摘要',
    dataIndex: 'abstract',
    width: '20%',
    key: 'abstract',
    render: text => TableTextHidden(text, 25)
  },{
    title: '作者',
    dataIndex: 'author',
    width: '5%',
    key: 'author'
  },{
    title: '状态',
    dataIndex: 'status',
    width: '5%',
    key: 'status'
  },{
    title: '创建时间',
    dataIndex: 'createdAt',
    width: '10%',
    key: 'createdAt',
    render: text => TableTime(text, 15)
  },{
    title: '操作',
    key: 'action',
    width: '15%',
    render: (text, record) => (
      <div className='table-icon-content' >
        <div className='table-icon-item' onClick={ delMessagexx } data-message-id={ record._id }  >
          <i className="iconfont icon-shanchu del-icon" style={{ fontSize: 20 }} ></i>
        </div>
        <div className='table-icon-item'  style={{ color: '#579df2' }}
             onClick={ editMessagexx } data-message-id={ record._id } >
             <i className="iconfont icon-compile  edit-icon" style={{ fontSize:25 }} ></i>
        </div>
        <div className='table-icon-item' style={{ display: messageSelect==='send' ? 'none' : 'block' }} onClick={ confirSendxx } data-message-id={ record._id } >
          <i className="iconfont icon-fasong  send-icon" style={{ fontSize: 15 }}  ></i>
        </div>
      </div>
      )
  },]
  return(
    <div>
      <Table dataSource={ messageArr } columns={ messageSelect==='send' ? columns : columnnosend } />
    </div>
    )
}

function editMessagexx(e) {
  const { messageId } = e.currentTarget.dataset
  localStorage.setItem('messageId', messageId)
  browserHistory.push('/message/edit')
}

// function textHidden(str){
//   if(str.length>=25){
//     return str.slice(0, 25) + '...'
//   }
//   else return str
// }

function confirSendxx(e){
  const { messageId } = e.currentTarget.dataset
  Modal.confirm({
    title: '提示',
    content: '确定发布本条信息',
    onOk(){
      messageChangeStatus(messageId)
    },
    onCancle(){
      console.log('cancle')
    }
  })
}

function delMessagexx(e){
  const { messageId } = e.currentTarget.dataset
  Modal.confirm({
    title: '提示',
    content: '确定删除本条信息',
    onOk(){
      messageDel(messageId)
    },
    onCancle(){
      console.log('cancle')
    }
  })
}

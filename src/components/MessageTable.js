

import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import Tooltip from 'antd/lib/tooltip'
import Modal from 'antd/lib/modal'
import messageChangeStatus from '../actions/messageChangeStatus'
import messageDel from '../actions/messageDel'


export default props => {
  const { messageArr, messageSelect } = props.state.message
  const columns = [{
    title: '标题',
    dataIndex: 'title',
    width: '20%',
    key: 'title',
    render: text =>
      <Tooltip title={ text }>
        <div className='message-table-display' >{textHidden(text)}</div>
      </Tooltip>
  },{
    title: '摘要',
    dataIndex: 'abstract',
    width: '20%',
    key: 'abstract',
    render: text =>
      <Tooltip title={ text }>
        <div className='message-table-display' >{textHidden(text)}</div>
      </Tooltip>
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
    render: text =>
     <div>
       <div>{ text.split(' ')[0] }</div>
       <div className='message-table-time' >{ text.split(' ')[1] }</div>
     </div>
  },{
    title: '推送时间',
    dataIndex: messageSelect==='send' ? 'updatedAt' : '',
    width: '10%',
    key: 'updatedAt',
    render: text =>
     <div>
       <div>{text.length? text.split(' ')[0] : '' }</div>
       <div className='message-table-time' >{ text.length? text.split(' ')[1] : ''}</div>
     </div>
  },{
    title: '操作',
    key: 'action',
    width: '15%',
    render: (text, record) => (
      <div className='message-arr-action' >
        <div className='message-arr-item'  style={{ color: '#579df2' }}
             onClick={ editMessagexx } data-message-id={ record._id } >
             <i className="iconfont icon-compile  message-edit-icon" ></i>
        </div>
        <div className='message-arr-item' style={{ display: messageSelect==='send' ? 'none' : 'block' }} onClick={ confirSendxx } data-message-id={ record._id } >
          <i className="iconfont icon-fasong  message-send-icon" style={{ width:12,height:12 }}  ></i>
        </div>
        <div className='message-arr-item' onClick={ delMessagexx } data-message-id={ record._id }  >
          <i className="iconfont icon-shanchu message-del-icon"  ></i>
        </div>
      </div>
      )
  },]
  return(
    <div>
      <Table dataSource={ messageArr } columns={ columns } />
    </div>
    )
}

function editMessagexx(e) {
  const { messageId } = e.currentTarget.dataset
  localStorage.setItem('messageId', messageId)
  browserHistory.push('/message/edit')
}

function textHidden(str){
  if(str.length>=25){
    return str.slice(0, 25) + '...'
  }
  else return str
}

function confirSendxx(e){
  const { messageId } = e.currentTarget.dataset
  Modal.confirm({
    title: '提示',
    content: '确定群发本条信息',
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

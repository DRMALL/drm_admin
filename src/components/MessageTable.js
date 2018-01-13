import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import Modal from 'antd/lib/modal'
import messageChangeStatus from '../actions/messageChangeStatus'
import messageDel from '../actions/messageDel'
import TableTextHidden from './TableTextHidden'
import TableTime from './TableTime'
import delIcon from '../images/dels.png'
import getMessagePublished from '../actions/getMessagePublished'
import getMessageUnpublished from '../actions/getMessageUnpublished'

//本页面没有配置好table，还是使用了复制。。
export default props => {
  const { unpublishedMessage, publishedMessage, messageSelect, publishedMeta, unpublishedMeta } = props.state.message
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
          <img src={ delIcon } alt='删除' style={{ width:20,height:20 }} />
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
          <img src={ delIcon } alt='删除' style={{ width:20,height:20 }} />
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

  const pagination = {
    onChange(page, size) {
      let offset = (page - 1) * size
      getMessagePublished(offset)
    },
    total: publishedMeta ? publishedMeta.count : 10
  }

  const unPagination = {
    onChange(page, size) {
      let offset = (page - 1) * size
      getMessageUnpublished(offset)
    },
    total: unpublishedMeta ? unpublishedMeta.count : 10
  }

  return(
    <div>
      <div style={{paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
        <Table
          dataSource={ messageSelect === 'send' ? publishedMessage : unpublishedMessage }
          columns={ messageSelect==='send' ? columnnosend : columns }
          pagination={ messageSelect == 'notsend' ? unPagination : pagination} />
      </div>
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

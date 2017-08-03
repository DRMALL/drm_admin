

import React from 'react'
import Table from 'antd/lib/table'
import { browserHistory } from 'react-router'
import TableTextHidden from './TableTextHidden'
import TableTime from './TableTime'
import Modal from 'antd/lib/modal'
import troubleDelById from '../actions/troubleDelById'
import dispatch from '../actions/dispatch'

export default props => {
  const { troubleArr, troubleModal, troubleId } = props.state.trouble
  console.log(troubleId)
  const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
  width: '20%',
  render: text => TableTextHidden( text, 40 )
  },{
  title: '分类',
  dataIndex: 'category',
  key: 'category',
  width: '10%',
  render: text =>
  <div>{text.text}</div>
  },{
  title: '内容',
  dataIndex: 'content',
  key: 'content',
  width: '30%',
  render: text => TableTextHidden( text, 40 )
  },{
  title: '添加时间',
  dataIndex: 'createdAtTime',
  key: 'createdAtTime',
  width: '20%',
  render: text =>  TableTime( text, 15 )
  },{
  title: '操作',
  key: 'action',
  width: '15%',
  render: (text, record) =>
    <div className='troubel-cation' >
      <div onClick={ getTrouble } data-trouble-id={ record._id } >
        <i className="iconfont icon-compile trouble-table-icon"  style={{ color: '#0068d2' }} ></i>
      </div>
      <div className='user-arr-item' onClick={ delTroubel } data-trouble-id={ record._id }  >
          <i className="iconfont icon-shanchu message-del-icon"  ></i>
        </div>
    </div>
  },]
  return (
    <div>
      <Table dataSource={troubleArr} columns={columns} rowKey={ record => record._id } />
      <Modal title='提示' visible={ troubleModal } okText='确定' cancelText='取消'
             onOk={ troubleDelById } onCancel={ cancleDeltrouble } >
             <p>确定删除此信息？</p>
      </Modal>
    </div>
    )
}

function delTroubel(e){
  const { troubleId } = e.currentTarget.dataset
  dispatch('TROUBLE_GET_TROUBLE_ID', troubleId )
}

function cancleDeltrouble(){
  dispatch('TROUBEL_CANCLE_DEL_TROUBEL')
}


function getTrouble(e){
  const { troubleId } = e.currentTarget.dataset
  localStorage.setItem('troubleId', troubleId )
  browserHistory.push('/trouble/edit')
  console.log(troubleId)
}

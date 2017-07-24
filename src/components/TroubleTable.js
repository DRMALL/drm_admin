

import React from 'react'
import Table from 'antd/lib/table'
import Tooltip from 'antd/lib/tooltip'
import { browserHistory } from 'react-router'
// import textHidden from '../utils/textHidden'

export default props => {
  const { troubleArr } = props.state.trouble
  const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
  width: '20%',
  render: text =>
    <Tooltip title={ text } >
      <div>{ textHiddenxxx(text)}</div>
    </Tooltip>
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
  render: text =>
  <Tooltip title={ text } >
      <div>{ textHiddenxxx(text)}</div>
    </Tooltip>
  },{
  title: '添加时间',
  dataIndex: 'createdAtTime',
  key: 'createdAtTime',
  width: '20%',
  render: text =>
    <div>
       <div>{ text.split(' ')[0] }</div>
       <div className='message-table-time' >{ text.split(' ')[1] }</div>
     </div>
  },{
  title: '操作',
  key: 'action',
  width: '15%',
  render: (text, record) =>
    <div onClick={ getTrouble } data-trouble-id={ record._id } >
      <i className="iconfont icon-compile trouble-table-icon"  style={{ color: '#0068d2' }} ></i>
    </div>
  },]
  return (
    <div>
      <Table dataSource={troubleArr} columns={columns} rowKey={ record => record._id } />
    </div>
    )
}

function textHiddenxxx(str){
  if(str.length>=40){
    return str.slice(0, 40) + '...'
  }
  else return str
}

function getTrouble(e){
  const { troubleId } = e.currentTarget.dataset
  localStorage.setItem('troubleId', troubleId )
  browserHistory.push('/trouble/edit')
  console.log(troubleId)
}

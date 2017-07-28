

import React from 'react'
import Table from 'antd/lib/table'
import Icon from 'antd/lib/icon'
import editUser from '../actions/editUser'
import userDel from '../actions/userDel'
import Modal from 'antd/lib/modal'
// import store from '../commons/store'

export default props => {
  const { userArr } = props.state.user
  const columns = [{
    title: '用户名称',
    dataIndex: 'name',
    key:'name'
  },{
    title: '用户邮箱',
    dataIndex: 'email',
    key:'email'
  },{
    title: '联系电话',
    dataIndex: 'phone',
    key:'phone'
  },{
    title: '公司名称',
    dataIndex: 'company_name',
    key:'company_name'
  },{
    title: '通讯地址',
    dataIndex: 'address',
    key:'address'
  },{
    title: '创建时间',
    dataIndex: 'time',
    key:'time'
  },{
    title: '操作',
    key:'action',
    render: (text, record) => (
      <div className='user-arr-action' >
        <div className='user-arr-item'  style={{ color: '#579df2' }}
             onClick={ editUser } data-user-id={ record._id } >
          <i className="iconfont icon-compile"  style={{ color: '#0068d2' }} ></i>
        </div>
        <div className='user-arr-item'  data-user-id={ record._id }
             onClick={ confirmDelUser } data-user-name={ record.name } ><Icon type="delete" /></div>
      </div>
      )
  }]
  return(
    <div>
      <Table columns={columns} dataSource={userArr} />
    </div>
    )
}



function confirmDelUser(e){
  const { userId, userName } = e.currentTarget.dataset
  Modal.confirm({
    title: '提示',
    content: `确认删除用户${userName},该操作不可逆!!`,
    onOk(){
      userDel(userId)
    },
    onCancle(){
      console.log('取消删除')
    },
    maskClosable: true
  })
}


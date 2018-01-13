

import React from 'react'
import Table from 'antd/lib/table'
// import Icon from 'antd/lib/icon'
import editUser from '../actions/editUser'
import userDel from '../actions/userDel'
import Modal from 'antd/lib/modal'
import delIcon from '../images/dels.png'
import getUserArr from '../actions/getUserArr'

export default props => {
  const { userArr, meta } = props.state.user
  const columns = [{
    title: '用户名称',
    dataIndex: 'name',
    width: '10%',
    key:'name'
  },{
    title: '用户邮箱',
    dataIndex: 'email',
    width: '10%',
    key:'email'
  },{
    title: '联系电话',
    dataIndex: 'phone',
    width: '10%',
    key:'phone'
  },{
    title: '公司名称',
    dataIndex: 'company_name',
    width: '20%',
    key:'company_name'
  },{
    title: '通讯地址',
    dataIndex: 'address',
    width: '20%',
    key:'address'
  },{
    title: '创建时间',
    dataIndex: 'time',
    width: '10%',
    key:'time'
  },{
    title: '操作',
    key:'action',
    width: '10%',
    render: (text, record) => (
      <div className='table-icon-content' >
        <div className='table-icon-item'  style={{ color: '#579df2' }}
             onClick={ editUser } data-user-id={ record._id } >
          <i className="iconfont icon-compile"  style={{ color: '#0068d2', fontSize:25 }} ></i>
        </div>
        <div className='table-icon-item'  data-user-id={ record._id }
             onClick={ confirmDelUser } data-user-name={ record.name } >
          <img src={ delIcon } alt='删除' style={{ width:20,height:20 }} />
        </div>
      </div>
      )
  }]

  const pagination = {
    total: meta ? meta.count : 10,
    onChange(page, size) {
      let offset = (page - 1) * size
      getUserArr(offset)
    }
  }

  return(
    <div>
      <div style={{paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
        <Table columns={columns} dataSource={userArr} pagination={pagination}/>
      </div>
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

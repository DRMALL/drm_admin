

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import getAuthorityById from '../actions/getAuthorityById'
import getUserNameArr from '../actions/getUserNameArr'
import getMachineNameArr from '../actions/getMachineNameArr'
import AuthorityInputs from '../components/AuthorityInputs'
import authEditPost from '../actions/authEditPost'
// import Button from 'antd/lib/button'

export default class AtuhEdit extends Component {
  componentDidMount() {
    let id = localStorage.getItem('authId')
    getUserNameArr()
    .then(() => getMachineNameArr())
    .then(() => getAuthorityById(id) )
    .catch(res => console.error('出错了！'))
  }
  render() {
    const { newAuthorityArr, userNameArr, machineNameArr } = this.props.state.authority
    const { pathname } = this.props.location
    return(
      <div>
        <div className='authority-new-tip' >
          <PageTip tip='修改设备权限' />
        </div>
        <AuthorityInputs pathname={ pathname }
                                newAuthorityArr={ newAuthorityArr }
                                userNameArr={ userNameArr }
                                machineNameArr={ machineNameArr }
                                num={ 0 } />
        <div className='authority-new-button' >
          <div className='machine-edit-btn' onClick={ authEditPost } >修改</div>
        </div>
      </div>
      )
  }
}



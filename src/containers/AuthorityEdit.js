

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import getAuthorityById from '../actions/getAuthorityById'
import getUserNameArr from '../actions/getUserNameArr'
import getMachineNameArr from '../actions/getMachineNameArr'
import AuthorityInput from '../components/AuthorityInput'
import authEditPost from '../actions/authEditPost'
import Button from 'antd/lib/button'

export default class AtuhEdit extends Component {
  componentDidMount() {
    getUserNameArr()
    getMachineNameArr()
    getAuthorityById(localStorage.getItem('authId'))
  }
  render() {
    console.log(this.props.state.authority)
    return(
      <div>
        <div className='authority-new-tip' >
          <PageTip tip='修改设备权限' />
        </div>
        <AuthorityInput { ...this.props } num={ 0 } />
        <div className='authority-new-button' >
          <Button onClick={ authEditPost } >提交修改</Button>
        </div>
      </div>
      )
  }
}



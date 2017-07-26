

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import getUserNameArr from '../actions/getUserNameArr'
import getMachineNameArr from '../actions/getMachineNameArr'
import AuthorityInput from '../components/AuthorityInput'
import Button from 'antd/lib/button'
import authorityNew from '../actions/authorityNew'
import authorityNewReset from '../actions/authorityNewReset'


export default class Authority extends Component{
  componentDidMount() {
    getUserNameArr()
    getMachineNameArr()
  }
  render() {
      console.log(this.props.state.authority)
      const { newAuthorityArr } = this.props.state.authority
    return(
        <div  >
          <div className='authority-new-tip' >
            <PageTip tip='设置设备权限' />
          </div>
          <div>
            {
              newAuthorityArr.map((item, index) =>
               <AuthorityInput { ...this.props } num={ index } key={index}/> )
            }
          </div>
          <div className='authority-new-button' >
            <Button onClick={ authorityNewReset }  >重置</Button>
            <Button onClick={ authorityNew }  >提交</Button>
          </div>
        </div>
      )
  }
}




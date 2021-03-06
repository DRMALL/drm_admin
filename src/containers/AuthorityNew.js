

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import getUserNameArr from '../actions/getUserNameArr'
import getMachineNameArr from '../actions/getMachineNameArr'
import AuthorityInputs from '../components/AuthorityInputs'
// import Button from 'antd/lib/button'
import authorityNew from '../actions/authorityNew'
import authorityNewReset from '../actions/authorityNewReset'
import dispatch from '../actions/dispatch'


export default class Authority extends Component{
  componentDidMount() {
    dispatch('AUTHORITY_NEW_RESET')
    getUserNameArr()
    .then(() => getMachineNameArr())
    .catch(() => console.error('出错了！！'))

  }
  render() {
      console.log(this.props.state.authority)
      const { newAuthorityArr, userNameArr, machineNameArr } = this.props.state.authority
      const { pathname } = this.props.location
    return(
        <div  >
          <div className='authority-new-tip' >
            <PageTip tip='设置设备权限' />
          </div>
          <div>
            {
              newAuthorityArr.map((item, index) =>
               <AuthorityInputs pathname={ pathname }
                                newAuthorityArr={ newAuthorityArr }
                                userNameArr={ userNameArr }
                                machineNameArr={ machineNameArr }
                                num={ index }
                                key={ index }/> )
            }
          </div>
          <div className='authority-new-button' >
            <div className='machine-edit-btns' onClick={ authorityNewReset }  >重置</div>
            <div className='machine-edit-btn' onClick={ authorityNew }  >提交</div>
          </div>
        </div>
      )
  }
}






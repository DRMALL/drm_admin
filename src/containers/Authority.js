

import React, { Component } from 'react'
import AuthorityTable from '../components/AuthorityTable'
import { conentHeadStr } from '../commons/contentStr'
import ContentTitle from '../components/ContentTitle'
import getAuthorityArr from '../actions/getAuthorityArr'
import getUserNameArr from '../actions/getUserNameArr'
import getMachineNameArr from '../actions/getMachineNameArr'



export default class Authority extends Component{
  componentDidMount() {
    getAuthorityArr()
    .then(() => getUserNameArr())
    .then(() => getMachineNameArr())
    .catch(res => console.error('出错了！'))
  }
  render() {
      const { authorityArray, userNameArr, machineNameArr, authModal, meta } = this.props.state.authority
    return(
        <div>
          <div className='user-head' >
          <ContentTitle head={ conentHeadStr.authourity } />
          </div>
          <AuthorityTable authorityArray={ authorityArray }
                          userNameArr={ userNameArr }
                          machineNameArr={ machineNameArr }
                          authModal={ authModal }
                          meta={ meta } />
        </div>
      )
  }
}

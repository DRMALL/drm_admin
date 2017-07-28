

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
    getUserNameArr()
    getMachineNameArr()
  }
  render() {
      console.log(this.props.state.authority)
    return(
        <div>
          <div className='user-head' >
          <ContentTitle head={ conentHeadStr.authourity } />
          </div>
          <AuthorityTable { ...this.props } />
        </div>
      )
  }
}




import React, { Component } from 'react'
import AuthorityTable from '../components/AuthorityTable'
import { conentHeadStr } from '../commons/contentStr'
import ContentTitle from '../components/ContentTitle'



export default class Authority extends Component{
  render() {
      console.log(this.props)
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




import React, { Component } from 'react'
import AuthorityTable from '../components/AuthorityTable'
import ContentTitle from '../components/ContentTitle'
import { conentHeadStr } from '../commons/contentStr'


export default class Authority extends Component{
  render() {
      console.log(this.props)
    return(
        <div>
          <ContentTitle head={ conentHeadStr.authourity } />
          <AuthorityTable { ...this.props } />
        </div>
      )
  }
}


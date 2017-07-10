

import React, { Component } from 'react'
import UserArr from '../components/UserArr'
import ContentTitle from '../components/ContentTitle'
import { conentHeadStr } from '../commons/contentStr'



export default class User extends Component {
  render() {
    return(
      <div className='user-container' >
        <ContentTitle head={ conentHeadStr.user } />
        <UserArr { ...this.props } />
      </div>
      )
  }
}

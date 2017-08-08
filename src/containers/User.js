

import React, { Component } from 'react'
import UserArr from '../components/UserArr'
import ContentTitle from '../components/ContentTitle'
import { conentHeadStr } from '../commons/contentStr'
import getUserArr from '../actions/getUserArr'



export default class User extends Component {
  componentDidMount() {
    getUserArr()
  }
  render() {
    return(
      <div className='user-container' >
        <ContentTitle head={ conentHeadStr.user } />
        <UserArr { ...this.props } />
      </div>
      )
  }
}

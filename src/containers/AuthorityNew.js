

import React, { Component } from 'react'
import AuthorityTable from '../components/AuthorityTable'
import { Link } from 'react-router'
import Icon from 'antd/lib/icon'


export default class Authority extends Component{
  render() {
      console.log(this.props)
    return(
        <div>
          <div className='user-head' >
          <div className='new-user-title' >新增权限</div>
          </div>
          <AuthorityTable { ...this.props } />
        </div>
      )
  }
}


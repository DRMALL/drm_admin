

import React, { Component } from 'react'
// import authorityArr from '../components/authorityArr'
import AuthorityTable from '../components/AuthorityTable'
import { Link } from 'react-router'
import Icon from 'antd/lib/icon'


export default class Authority extends Component{
  render() {
      console.log(this.props)
    return(
        <div>
          <div className='user-head' >
          <div className='user-head-left' >权限管理</div>
          <Link to='/authority/new' className='user-head-right' >
            <div className='user-head-right-block' ><Icon type="plus" /></div>
            <div className='user-head-right-text' >新增权限</div>
          </Link>
          </div>
          <AuthorityTable { ...this.props } />
        </div>
      )
  }
}

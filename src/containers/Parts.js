

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import getPartArr from '../actions/getPartArr'
import PartTable from '../components/PartTable'



export default class User extends Component {
  componentDidMount() {
    getPartArr()
  }
  render() {
    console.log(this.props.state.part)
    return(
      <div className='part-container' >
        <div className='part-content-title' >
          <PageTip tip='配件管理' />
        </div>
        <PartTable table={ this.props.state.part.partArr } />
      </div>
      )
  }
}

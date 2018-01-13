

import React, { Component } from 'react'
// import PageTip from '../components/PageTip'
import getPartArr from '../actions/getPartArr'
import PartTable from '../components/PartTable'
import PartTitle from '../components/PartTitle'



export default class User extends Component {
  componentDidMount() {
    getPartArr()
  }
  render() {
    return(
      <div className='part-container' >
        <div className='part-content-title' >
          <PartTitle tip='配件管理' />
        </div>
        <PartTable table={ this.props.state.part.partArr } meta={ this.props.state.part.meta }/>
      </div>
      )
  }
}

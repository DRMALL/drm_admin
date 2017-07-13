

import React, { Component } from 'react'
import ContentTitle from '../components/ContentTitle'
import { conentHeadStr } from '../commons/contentStr'
import getTroubleArr from '../actions/getTroubleArr'
import TroubleTable from '../components/TroubleTable'



export default class User extends Component {
  componentDidMount() {
    getTroubleArr()
  }
  render() {
    console.log(this.props.state.trouble)
    return(
      <div className='user-container' >
        <ContentTitle head={ conentHeadStr.trouble } />
        <TroubleTable { ...this.props } />
      </div>
      )
  }
}

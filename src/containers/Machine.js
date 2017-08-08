//

import React, { Component } from 'react'
import MachineTable from '../components/MachineTable'
import ContentTitle from '../components/ContentTitle'
import { conentHeadStr } from '../commons/contentStr'
import getMachineArr from '../actions/getMachineArr'



export default class User extends Component {
  componentDidMount() {
    getMachineArr()
  }
  render() {
    return(
      <div className='user-container' >
        <ContentTitle head={ conentHeadStr.machine } />
        <MachineTable { ...this.props } />
      </div>
      )
  }
}

//

import React, { Component } from 'react'
import MachineTable from '../components/MachineTable'
import MachineTitle from '../components/MachineTitle'
import { conentHeadStr } from '../commons/contentStr'
import getMachineArr from '../actions/getMachineArr'



export default class User extends Component {
  componentDidMount() {
    getMachineArr()
  }
  render() {
    return(
      <div className='user-container' >
        <MachineTitle head={ conentHeadStr.machine } />
        <MachineTable { ...this.props } />
      </div>
      )
  }
}

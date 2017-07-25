

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import MachineInfo from '../components/MachineInfo'
import MachineTarget from '../components/MachineTarget'
import MachineDownload from '../components/MachineDownload'

export default class MachineControl extends Component {
  componentDidMount() {
    // console.log()
  }
  render() {
    return(
      <div className='machine-control-container' >
        <PageTip tip='设备监控' />
        <MachineInfo { ...this.props } />
        <PageTip tip='指标数据' />
        <MachineTarget />
        <MachineDownload />
      </div>
      )
  }
}


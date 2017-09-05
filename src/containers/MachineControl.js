

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import MachineInfo from '../components/MachineInfo'
import MachineTarget from '../components/MachineTarget'
import MachineDownload from '../components/MachineDownload'
import getMachineStatusInfoById from '../actions/getMachineStatusInfoById'
import dispatch from '../actions/dispatch'

export default class MachineControl extends Component {
  componentDidMount() {
    dispatch('MACHINE_STATUS_INFO_RESET')
    getMachineStatusInfoById(localStorage.getItem('machineNumber'))
  }
  // render() {
  //   return(
  //     <div className='machine-control-container' >
  //       <PageTip tip='设备监控' />
  //       <MachineInfo { ...this.props } />
  //       <PageTip tip='指标数据' />
  //       <MachineTarget />
  //       <MachineDownload { ...this.props } />
  //     </div>
  //     )
  // }
  render() {
    const { machineStatusInfo } = this.props.state.machine
    const machineAddress = localStorage.getItem('machineAddress')
    const machineName = localStorage.getItem('machineName')
    return(
      <div className='machine-control-container' >
         <PageTip tip='设备监控' />
         <MachineInfo machineName={ machineName } machineAddress={ machineAddress }
                machineStatusInfo={ machineStatusInfo } />
        <PageTip tip='指标数据' />
        <MachineTarget arr={ machineStatusInfo }  />
        <MachineDownload { ...this.props } />
      </div>
      )
  }
}


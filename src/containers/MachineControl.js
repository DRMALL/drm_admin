

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
// import MachineInfo from '../components/MachineInfo'
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
    if(machineStatusInfo)
    return(
      <div className='machine-control-container' >
        <PageTip tip='设备信息' />
        <MachineTarget arr={ machineStatusInfo }  />
        <MachineDownload { ...this.props } />
      </div>
      )
  else return(
    <div>
      <PageTip tip='设备信息' />
      <div>暂无此设备信息</div>
    </div>
    )
  }
}


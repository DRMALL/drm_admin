

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import MachineInfo from '../components/MachineInfo'
import MachineTarget from '../components/MachineTarget'
import MachineStatus from '../components/MachineStatus'
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
    if (!this.props.state.machine.machineStatusInfo) 
      return <div></div>
    console.log(1000, this.props.state)
    const { machineStatusInfo } = this.props.state.machine,
          machineAddress = localStorage.getItem('machineAddress'),
          machineName = localStorage.getItem('machineName'),
          machineNumber = localStorage.getItem('machineNumber'), 
          machinePressure = localStorage.getItem('machinePressure'),
          machineClassify = localStorage.getItem('machineClassify'),
          machineCc = localStorage.getItem('machineCc'),
          machineRemark = localStorage.getItem('machineRemark'),
          machineCombustible = localStorage.getItem('machineCombustible'),
          machineDescription = localStorage.getItem('machineDescription')

    return(
      <div className='machine-control-container' >
         <PageTip tip='设备参数' />
         <MachineInfo machineClassify={ machineClassify } 
                      machineCc={ machineCc } 
                      machineRemark={ machineRemark } 
                      machineCombustible={ machineCombustible } 
                      machineDescription={ machineDescription } 
                      machineName={ machineName } 
                      machineAddress={ machineAddress }
                      machineNumber={ machineNumber }
                      machinePressure={ machinePressure } />
        <PageTip tip='设备状态' />
        <MachineStatus info={ machineStatusInfo }  />
        <PageTip tip='指标数据' />
        <MachineTarget arr={ machineStatusInfo.data }  />
        <MachineDownload { ...this.props } />
      </div>
      )
  }
}


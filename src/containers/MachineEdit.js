

import React, { Component } from 'react'
import getMachineById from '../actions/getMachineById'
import MachineInput from '../components/MachineInput'
import MachineRecord from '../components/MachineRecord'
import Button from 'antd/lib/button'
import editMachine from '../actions/editMachine'
import MachineTimeline from '../components/MachineTimeline'
import Affix from 'antd/lib/affix'
import dispatch from '../actions/dispatch'

export default class MachineEdit extends Component {
  componentDidMount() {
    getMachineById(localStorage.getItem('machineId'))
  }

  render() {
    const { number, affixChange, timelines, editTimeline } = this.props.state.machine
    if(number)
    return(
      <div>
        <div className='machine-new-title' >修改设备</div>
        <div className='machine-edit-content' >
          <MachineInput { ...this.props } />
          <Affix onChange={ paddingTimeline } >
          <div style={{ backgroundColor: '#fff', zIndex: 4 }}  >
            <MachineRecord { ...this.props.state.machine } />
            <Button onClick={ editMachine } className='machine-edit-button' >提交</Button>
            </div>
          </Affix>
          <div className='machine-edit-timeline' style={{ paddingTop: affixChange ? 270 : 0  }} >
            <MachineTimeline timelines={ timelines }
                             editTimeline={ editTimeline } />
          </div>
        </div>
      </div>
      )
  else return <div>loading...</div>
  }
}

function paddingTimeline(boolean){
  dispatch('MACHINE_AFFIX_PADDING_CHANGE', boolean)
}



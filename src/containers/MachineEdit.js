

import React, { Component } from 'react'
import getMachineById from '../actions/getMachineById'
import MachineInput from '../components/MachineInput'
import MachineRecord from '../components/MachineRecord'
import editMachine from '../actions/editMachine'
import editMachineTimeline from '../actions/editMachineTimeline'
import MachineTimeline from '../components/MachineTimeline'
import Affix from 'antd/lib/affix'
import dispatch from '../actions/dispatch'


export default class MachineEdit extends Component {
  componentDidMount() {
    getMachineById(localStorage.getItem('machineId'))
    dispatch('MACHINE_PUT_TIMELINE_SUCCESS')
  }

  render() {
    const { name, number, pressure, affixChange, timelines, editTimeline } = this.props.state.machine
    if(number||name||pressure)
    return(
      <div>
        <div className='machine-new-title' >修改设备</div>
        <div  >
          <div className='machine-edit-content' >
            <MachineInput { ...this.props } />
          </div>
          <div className='machine-edit-xx' >
            <div className='machine-edit-btn' style={{ marginLeft: 150 }}
                  onClick={ editMachine } >确认</div>
          </div>
          <div className='machine-new-title' >设备时间线</div>
          <Affix onChange={ paddingTimeline }  >
          <div style={{ backgroundColor: '#fff', paddingLeft: affixChange ? 50 : 50 }}  >
            <MachineRecord { ...this.props.state.machine } />
            <div style={{ display: 'flex', marginTop: 30, marginBottom:30 }} >
              <div className='machine-edit-btn' onClick={ editMachineTimeline }
                   style={{ marginLeft: 100 }} >提交</div>
            </div>
          </div>
          </Affix>
          <div className='machine-edit-timeline' style={{ marginTop: affixChange ? 300 : 0 }} >
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



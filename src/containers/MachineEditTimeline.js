

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import TimeLineEdit from '../components/TimeLineEdit'
import Button from 'antd/lib/button'
import timeLineEditPut from '../actions/timeLineEditPut'


export default class MachineEditTimeline extends Component {
  render(){
    const { editTimeline } = this.props.state.machine
  return (
    <div>
      <div className='timeline-edit-tip' >
        <PageTip tip='编辑时间线' />
      </div>
      <div className='timeline-edit-input' >
        <TimeLineEdit { ...editTimeline } />
      </div>
      <div className='timeline-edit-button' >
        <Button onClick={ timeLineEditPut } >提交</Button>
      </div>
    </div>
    )
 }
}


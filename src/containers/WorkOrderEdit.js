

import React, { Component } from 'react'
import Input from 'antd/lib/input'
// import Button from 'antd/lib/button'
import getInputValue from '../actions/getInputValue'
import getWorkOrderById from '../actions/getWorkOrderById'
import { browserHistory } from 'react-router'
import dispatch from '../actions/dispatch'
import workOrderEditxx from '../actions/workOrderEditxx'


export default class WorkOrderEdit extends Component {
  componentDidMount() {
    dispatch('WORKORDER_EDIT_RESET')
    getWorkOrderById(localStorage.getItem('workOrderId'))
  }
  render() {
    const { title, content, advice } = this.props.state.workOrder
    return(
      <div>
        <div className='workorder-edit-title' >处理工单</div>
        <div className='workorder-edit-content' >
          <div className='workorder-edit-flex' >
            <div className='workorder-edit-left' >标题: </div>
            <div className='workorder-edit-right' >{ title }</div>
          </div>
          <div className='workorder-edit-flex' >
            <div className='workorder-edit-left'  >内容: </div>
            <div className='workorder-edit-right'  >{
              content[0]==='<' ? <div dengerouslyInnerHTML={{__html: content}} /> :
              content
            }</div>
          </div>
          <div className='workorder-edit-tip' >设备描述</div>
          <Input.TextArea  placeholder='输入对设备的描述' data-path='WORKORDER'
                  data-id='advice' onChange={ getInputValue }
                  style={{ width:400 }} rows={ 5 }
                  value={ advice } />
          <div className='workorder-edit-button' >
            <div className='machine-edit-btns' onClick={ giveUp } >放弃</div>
            <div className='machine-edit-btn' onClick={ workOrderEditxx } >提交</div>
          </div>
        </div>
      </div>
      )
  }
}

function giveUp(){
  dispatch('WORKORDER_EDIT_RESET')
  browserHistory.push('/workOrder')
}

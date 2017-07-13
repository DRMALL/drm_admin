

import React, { Component } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import getInputValue from '../actions/getInputValue'


export default class WorkOrderEdit extends Component {
  render() {
    return(
      <div>
        <div className='workorder-edit-title' >处理工单</div>
        <div className='workorder-edit-content' >
          <div className='workorder-edit-flex' >
            <div className='workorder-edit-left' >标题: </div>
            <div >xxx</div>
          </div>
          <div className='workorder-edit-flex' >
            <div className='workorder-edit-left'  >内容: </div>
            <div>xxx</div>
          </div>
          <div className='workorder-edit-tip' >设备描述</div>
          <Input.TextArea  placeholder='输入对设备的描述' data-path='WORKORDER'
                  data-id='value' onChange={ getInputValue }
                  style={{ width:400 }} rows={ 5 } />
          <div className='workorder-edit-button' >
            <Button>放弃</Button>
            <Button>提交</Button>
          </div>
        </div>
      </div>
      )
  }
}

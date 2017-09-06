

import React, { Component } from 'react'
import Input from 'antd/lib/input'
// import Button from 'antd/lib/button'
import getInputValue from '../actions/getInputValue'
import getWorkOrderById from '../actions/getWorkOrderById'
import { browserHistory } from 'react-router'
import dispatch from '../actions/dispatch'
import workOrderEditxx from '../actions/workOrderEditxx'
import Modal from 'antd/lib/modal'


export default class WorkOrderEdit extends Component {
  componentDidMount() {
    dispatch('WORKORDER_EDIT_RESET')
    getWorkOrderById(localStorage.getItem('workOrderId'))
  }
  render() {
    const { title, content, advice, images, preImg, isShowPre } = this.props.state.workOrder
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
          <div className='workorder-edit-flex'  style={{ display: (images&&images.length) ? 'flex' : 'none' }} >
            <div className='workorder-edit-left'  >图片: </div>
            <div className='workorder-edit-right'  >{
              (images&&images.length) ?images.map(item =>
                <img src={ item.url } alt='设备图片' key={ item._id }
                style={{ width: 300, height:300, marginLeft:20, marginBottom: 20 }}
                 onClick={ preWorkOrderImg } data-img={ item.url } />) : ''
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
        <Modal visible={ isShowPre } onCancel={ hiddenPreImg } onOk={ hiddenPreImg } >
          <img src={ preImg } alt='设备图片' style={{ width: '100%', height: '100%' }} />
        </Modal>
      </div>
      )
  }
}

function hiddenPreImg(){
  dispatch('WORKORDER_HIDDEN_IMG')
}

function preWorkOrderImg(e){
  const { img } = e.currentTarget.dataset
  dispatch('WORKORDER_PREVIEW_IMG', img)
}

function giveUp(){
  dispatch('WORKORDER_EDIT_RESET')
  browserHistory.push('/workOrder')
}

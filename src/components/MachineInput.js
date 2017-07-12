

import React from 'react'
import Input from 'antd/lib/input'
import getInputValue from '../actions/getInputValue'
import Upload from 'antd/lib/upload'
import { uploadImg } from '../commons/apis'
import Modal from 'antd/lib/modal'
import dispatch from '../actions/dispatch'
import Icon from 'antd/lib/icon'


export default props => {
  const { fileList, previewImage, previewVisible } = props.state.machine
  const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传图片</div>
      </div>
  )
    return(
      <div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备名称</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备名称'  />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备编号</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备编号' />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>压力分类</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入压力分类' />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>燃料分类</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入燃料分类' />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>排量分类</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入排量分类' />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备所在地</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备所在地' />
        </div>
        <div className='machine-input-flexs' >
          <div className='machine-input-left' >设备描述</div>
          <Input.TextArea rows={4} style={{ width: 400 }}
                  placeholder='输入设备描述'/>
        </div>
        <div>
          <div>上传设备图片</div>
          <div>
            <Upload
              action={`${uploadImg}?token=${localStorage.getItem('token')}`}
              name="news"
              listType="picture-card"
              fileList={fileList}
              multiple={ true }
              onPreview={ handlePreviewMachine }
              onChange={ handleChangeMachine }
            >
              {fileList.length >= 10 ? null : uploadButton}
            </Upload>
            <Modal visible={ previewVisible } footer={null} onCancel={ handleCancelMachine }>
              <img alt="example" style={{ width: '100%' }} src={ previewImage } />
            </Modal>
          </div>
        </div>
      </div>
      )
}

function handlePreviewMachine(e) {
  console.log(e.response.data.url)
  const { url } = e.response.data
  dispatch('MESSAGE_PREVIEW_IMG', url)
}

function handleChangeMachine(e){
  dispatch('MESSAGE_UPLOAD_IMG', e.fileList)
}

function handleCancelMachine(e){
  dispatch('MESSAGE_HIDDEN_MODAL')
}


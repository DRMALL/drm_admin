

import React from 'react'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import { pressureArr, fuelArr, displacementArr } from '../commons/machineLable'
import getInputValue from '../actions/getInputValue'
import Upload from 'antd/lib/upload'
import { machineUploadImg } from '../commons/apis'
import Modal from 'antd/lib/modal'
import dispatch from '../actions/dispatch'
import Icon from 'antd/lib/icon'


export default props => {
  const { fileList, previewImage, previewVisible } = props.state.machine
  console.log(props.state.machine)
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
                  style={{ width: 400 }} placeholder='输入设备名称'
                  data-path='MACHINE' data-id='name' />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备编号</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备编号'
                  data-path='MACHINE' data-id='num' />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>压力分类</div>
          <Select style={{ width: 400 }} placeholder='选择压力分类'
                  onChange={ selectValue } >
                  {
                    fuelArr.map((item, index) =>
                      <Select.Option key={ index } value={ item+'/fuel' } >{ item }</Select.Option>)
                  }
          </Select>
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>燃料分类</div>
          <Select style={{ width: 400 }} placeholder='选择燃料分类'
                  onChange={ selectValue } >
                  {
                    pressureArr.map((item, index) =>
                      <Select.Option key={ index } value={ item+'/pressure' } >{ item }</Select.Option>)
                  }
          </Select>
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>排量分类</div>
          <Select style={{ width: 400 }} placeholder='选择排量分类'
                  onChange={ selectValue } >
                  {
                    displacementArr.map((item, index) =>
                      <Select.Option key={ index } value={ item+'/displacement' } >{ item }</Select.Option>)
                  }
          </Select>
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备所在地</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备所在地'
                  data-path='MACHINE' data-id='where' />
        </div>
        <div className='machine-input-flexs' >
          <div className='machine-input-left' >设备描述</div>
          <Input.TextArea rows={4} style={{ width: 400 }}
                  placeholder='输入设备描述'
                  onChange={ getInputValue }
                  data-path='MACHINE' data-id='describle' />
        </div>
        <div>
          <div className='machine-input-left machine-input-flexs' >上传设备图片</div>
          <div className='machine-input-upload' >
            <Upload
              action={`${machineUploadImg}?token=${localStorage.getItem('token')}`}
              name="device"
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

function selectValue(value){
  let arr = value.split('/')
  let obj ={}
  obj[arr[1]] = arr[0]
  dispatch('MACHINE_NEW_GET_SELECT', obj)
}

function handlePreviewMachine(e) {
  let url = e.response ? e.response.data.url : e.url
  dispatch('MACHINE_PREVIEW_IMG', url)
}

function handleChangeMachine(e){
  dispatch('MACHINE_UPLOAD_IMG', e.fileList)
}

function handleCancelMachine(e){
  dispatch('MACHINE_HIDDEN_MODAL')
}


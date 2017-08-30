

import React from 'react'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
// import { pressureArr, fuelArr, displacementArr } from '../commons/machineLable'
import getInputValue from '../actions/getInputValue'
import Upload from 'antd/lib/upload'
import { machineUploadImg } from '../commons/apis'
import Modal from 'antd/lib/modal'
import dispatch from '../actions/dispatch'
import Icon from 'antd/lib/icon'
import resetMachineImg from '../actions/resetMachineImg'
import selectValue from '../utils/selectValue'
import beforeUploadMachine from '../utils/beforeUploadMachine'


export default props => {
  const { fileList, previewImage, previewVisible, name, number, cc, pressure, combustible, description, address, classify, CCKindArr, presureKindArr, fuleKindArr } = props.state.machine
  const uploadButton = (
      <div>
        <Icon type="plus" style={{ fontSize: 28, marginBottom:12 }}  />
        <div className="ant-upload-text" style={{ fontSize:12 }} >上传图片</div>
      </div>
  )
    return(
      <div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备名称</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备名称'
                  data-path='MACHINE' data-id='name' value={ name } />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备编号</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备编号'
                  data-path='MACHINE' data-id='number' value={ number } />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>压力分类</div>
          <Select style={{ width: 400 }} placeholder='选择压力分类'
                  onChange={ selectValue } value={ pressure } >
                  {
                    presureKindArr.map((item, index) =>
                      <Select.Option key={ index } value={ item.text+'/pressure' } >{ item.text }</Select.Option>)
                  }
          </Select>
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>燃料分类</div>
          <Select style={{ width: 400 }} placeholder='选择燃料分类'
                  onChange={ selectValue } value={ combustible } >
                  {
                    fuleKindArr.map((item, index) =>
                      <Select.Option key={ index } value={ item.text+'/combustible' } >{ item.text }</Select.Option>)
                  }
          </Select>
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>排量分类</div>
          <Select style={{ width: 400 }} placeholder='选择排量分类'
                  onChange={ selectValue } value={ cc } >
                  {
                    CCKindArr.map((item, index) =>
                      <Select.Option key={ index } value={ item.text+'/cc' } >{ item.text }</Select.Option>)
                  }
          </Select>
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备分类</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备分类'
                  data-path='MACHINE' data-id='classify' value={ classify } />
        </div>
        <div className='machine-input-flex' >
          <div  className='machine-input-left'>设备所在地</div>
          <Input  className='machine-input-right' onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入设备所在地'
                  data-path='MACHINE' data-id='address' value={ address } />
        </div>
        <div className='machine-input-flexs' >
          <div className='machine-input-left' >设备备注</div>
          <Input.TextArea rows={4} style={{ width: 400 }}
                  placeholder='输入设备备注'
                  onChange={ getInputValue }
                  data-path='MACHINE' data-id='description'
                  value={ description } />
        </div>
        <div>
          <div style={{ marginTop: 20 }} >
            上传设备图片<span style={{ color: 'rgba(0,0,0,0.4)' }} >（最多8张）</span>
          </div>
          <div className='machine-input-upload' >
            <Upload
              action={`${machineUploadImg}?token=${localStorage.getItem('token')}`}
              name="device"
              listType="picture-card"
              fileList={fileList}
              multiple={ true }
              beforeUpload={ beforeUploadMachine }
              onPreview={ handlePreviewMachine }
              onChange={ handleChangeMachine }
              onRemove={ resetMachineImg }
            >
              {fileList.length >= 8 ? null : uploadButton}
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
  let url = e.response ? e.response.data.url : e.url
  dispatch('MACHINE_PREVIEW_IMG', url)
}

function handleChangeMachine(e){
  dispatch('MACHINE_UPLOAD_IMG', e.fileList)
  let array = e.fileList
  let arr = array.filter(item => item.status==='uploading')
  if(!arr.length) dispatch('RESET_UPLOAD_IMG')
}

function handleCancelMachine(e){
  dispatch('MACHINE_HIDDEN_MODAL')
}


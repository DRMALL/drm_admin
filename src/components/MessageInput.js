
import React from 'react'
import Input from 'antd/lib/input'
import getInputValue from '../actions/getInputValue'
import Upload from 'antd/lib/upload'
import Modal from 'antd/lib/modal'
import Icon from 'antd/lib/icon'
import beforeUpload from '../utils/beforeUpload'
import LzEditor from 'react-lz-editor'


import { uploadImg, troubleImg } from '../commons/apis'
import dispatch from '../actions/dispatch'


export default props => {
  const { previewVisible, previewImage, fileList, title, abstract, content, isEdit, messageRichImg } = props.state.message
  const uploadButton = (
      <div>
        <Icon type="plus" style={{ fontSize: 28, marginBottom:12 }} />
        <div className="ant-upload-text" style={{ fontSize:12 }} >上传图片</div>
      </div>
  )
  const token = localStorage.getItem('token')
  const uploadProps = {
      action: `${troubleImg}?token=${token}`,
      name: 'bugs',
      onChange: onChange,
      listType: 'picture',
      fileList: messageRichImg,
      data: (file) => {
      },
      multiple: true,
      beforeUpload: beforeUpload,
      showUploadList: true
  }
  function onChange(e){
    let result = e.fileList
    result.map((item, index )=> {
      item.url = item.response ? item.response.data.url  : ''
      item.key = '-' + index
    })
    dispatch('MESSAGE_GET_RICH_TEXT_IMGAGES', result)
  }
  return (
    <div>
        <div className='message-new-tip' >标题</div>
        <Input onChange={ getInputValue } placeholder='输入信息标题'
               data-path='MESSAGE' data-id='title' value={ title } />
        <div className='message-new-tip' >内容</div>
        <LzEditor cbReceiver={ getMessageValue }  video={ false }
                audio={ false } urls={ false } importContent={ content }  active={isEdit}
                autoSave={ false }  uploadProps={uploadProps} />
        <div className='message-new-tip' >摘要（64字以内）</div>
        <Input.TextArea onChange={ getInputValue } rows={2} placeholder='输入摘要'
                        data-path='MESSAGE' data-id='abstract' value={ abstract } />
        <div className='message-new-tip' >封面图片（第一张为信息封面图）</div>
        <div className="clearfix" >
          <Upload
            action={`${uploadImg}?token=${localStorage.getItem('token')}`}
            name="news"
            listType="picture-card"
            fileList={fileList}
            multiple={ true }
            beforeUpload={ beforeUpload }
            onPreview={ handlePreview }
            onChange={ handleChange }
          >
            {fileList.length >= 10 ? null : uploadButton}
          </Upload>
          <Modal visible={ previewVisible } footer={null} onCancel={ handleCancel }>
            <img alt="example" style={{ width: '100%' }} src={ previewImage } />
          </Modal>
        </div>
    </div>
    )
}

function getMessageValue(e){
  dispatch('MESSAGE_GET_EDITOR_VALUE', { content: e })
}

function handlePreview(e) {
  console.log(e)
  let url
  url = e.response ? e.response.data.url : e.url
  dispatch('MESSAGE_PREVIEW_IMG', url)
}


function handleChange(e){
  dispatch('MESSAGE_UPLOAD_IMG', e.fileList)
}

function handleCancel(e){
  dispatch('MESSAGE_HIDDEN_MODAL')
}

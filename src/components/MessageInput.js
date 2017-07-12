
import React from 'react'
import Input from 'antd/lib/input'
import getInputValue from '../actions/getInputValue'
import Upload from 'antd/lib/upload'
import Modal from 'antd/lib/modal'
import Icon from 'antd/lib/icon'


import { uploadImg } from '../commons/apis'
import dispatch from '../actions/dispatch'


export default props => {
  const { previewVisible, previewImage, fileList, title, abstract, content } = props.state.message
  const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传图片</div>
      </div>
  )
  return (
    <div>
        <div className='message-new-tip' >标题</div>
        <Input onChange={ getInputValue } placeholder='输入信息标题'
               data-path='MESSAGE' data-id='title' value={ title } />
        <div className='message-new-tip' >内容</div>
        <Input.TextArea onChange={ getInputValue }  rows={6}  placeholder='输入信息内容' data-path='MESSAGE' data-id='content' value={ content } />
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

function handlePreview(e) {
  console.log(e.response.data.url)
  const { url } = e.response.data
  dispatch('MESSAGE_PREVIEW_IMG', url)
}

function handleChange(e){
  dispatch('MESSAGE_UPLOAD_IMG', e.fileList)
}

function handleCancel(e){
  dispatch('MESSAGE_HIDDEN_MODAL')
}



import React from 'react'
import PageTip from '../components/PageTip'
import Upload from 'antd/lib/upload'
import Icon from 'antd/lib/icon'
import notification from 'antd/lib/notification'
import { partUploadfile } from '../commons/apis'

export default props => {
  return (
    <div className='part-upload' >
      <PageTip tip='导入配件数据' />
      <Upload name= 'file'
              action= {`${partUploadfile}?token=${localStorage.getItem('token')}`}
              // fileList={ fileList }
              onChange={ handleChange } >
        <div className='part-upload-content' ><Icon type="upload" />导入数据</div>
      </Upload>
    </div>
    )
}

function handleChange(e){
  console.log(e.file, e.fileList)
  if(e.file.status==='done') {
    notification.success({
      message:'提示',
      description: '上传成功！'
    })
  }
  else if(e.file.status==='error') {
    notification.error({
      message:'提示',
      description: '上传失败！请重新上传'
    })
  }
}

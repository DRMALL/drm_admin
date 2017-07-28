

import notification from 'antd/lib/notification'

function beforeUpload(file){
  const boolean = file.size/1024 < 500
  if(!boolean)  notification.warning({
    message: '提示',
    description:'图片大于500k, 不予上传！'})
  return boolean
}

export default beforeUpload



import notification from 'antd/lib/notification'
// import store from '../commons/store'
// import dispatch from '../actions/dispatch'

function beforeUpload(file){
  // const { fileList, imgNum } = store.getState().machine
  // dispatch('UPLOAD_IMG_GET_NUM', imgNum + 1 )
  // if( fileList.length + imgNum >= 8 ) return false
  // else {
  const type = file.type
  let upload = type ==='image/png'|| type ==='image/gif'|| type ==='image/bmp'|| type ==='image/jpeg' ||  type ==='image/jpg' ||type === 'image/webp'
  if(upload){
      const boolean = file.size/1024 < 10000
      if(!boolean)  notification.warning({
        message: '提示',
        description:'图片大于10MB, 不予上传！'})
      return boolean
  }
  else {
    notification.error({
    message: '提示',
    description:'上传图片格式错误！请上传一下几种格式图片image/png、image/gif、image/bmp、image/jpeg、image/jpg、image/webp'
  })
  return false
}
  // }


}

export default beforeUpload

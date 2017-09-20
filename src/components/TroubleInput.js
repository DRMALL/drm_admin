import React from 'react'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import getInputValue from '../actions/getInputValue'
// import { troubleType } from '../commons/troubleCommon'
import dispatch from '../actions/dispatch'
import changeTroubleType from '../utils/changeTroubleType'
import LzEditor from 'react-lz-editor'
import beforeUpload from '../utils/beforeUpload'
import  { troubleImg } from '../commons/apis'
import Editor from '../containers/Editor'


export default props => {
  const { title, categoryxx, content, troubleKinds, isEdit, troubleImgList } = props.state.trouble
  function getValue(e){
    console.log(e)
    dispatch('TROUBLE_GET_CONTENT_VALUE', { content: e })
  }
  const token = localStorage.getItem('token')
  // const uploadProps = {
  //     action: `${troubleImg}?token=${token}`,
  //     name: 'bugs',
  //     onChange: onChange,
  //     listType: 'picture',
  //     fileList: troubleImgList,
  //     data: (file) => {
  //     },
  //     multiple: true,
  //     beforeUpload: beforeUpload,
  //     showUploadList: true
  // }
  // function onChange(e){
  //   let result = e.fileList
  //   result.map((item, index )=> {
  //     item.url = item.response ? item.response.data.url  : ''
  //     item.key = '-' + index
  //   })
  //   dispatch('TROUBLE_GET_RICH_TEXT_IMGAGES', result)
  // }

  return (
    <div>
      <div className='trouble-input-flex' >
        <div className='trouble-input-left' >标题</div>
        <Input style={{ width:300 }} onChange={ getInputValue }
               data-path='TROUBLE' data-id='title'
               placeholder='输入标题' value={ title } />
      </div>
      <div className='trouble-input-flex' >
        <div className='trouble-input-left' >分类</div>
        <Select style={{ width:300 }} onChange={ troubleSelect }
               placeholder='请输入分类' value={ changeTroubleType(categoryxx, troubleKinds) }  >
          {
            troubleKinds.map( (item, index) =>
            <Select.Option key={ index } value={ item._id }>{item.text}</Select.Option> )
          }
        </Select>
      </div>
      <div className='trouble-input-flexs' >
        <div  className='trouble-input-lefts' >问题描述</div>
        <div className='trouble-input-editor'>
{/*        <LzEditor cbReceiver={ getValue }  video={ false } uploadProps={uploadProps}
                audio={ false } urls={ false } importContent={ content }  active={isEdit}
                autoSave={ false }/>*/}

          <Editor bounds='.trouble-input-editor' 
                  onChange={getValue}
                  value={content}/>
        </div>
      </div>
    </div>
    )
}

function troubleSelect(value){
  // console.log(value)
  dispatch('TROUBLE_GET_SELECT_VALUE', value)
}

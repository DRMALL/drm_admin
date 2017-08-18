

import React from 'react'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import getInputValue from '../actions/getInputValue'
// import { troubleType } from '../commons/troubleCommon'
import dispatch from '../actions/dispatch'
import changeTroubleType from '../utils/changeTroubleType'
// import ReactDOM from 'react-dom';
import LzEditor from 'react-lz-editor'

export default props => {
  const { title, categoryxx, content, troubleKinds } = props.state.trouble
  function getValue(e){
    console.log(e)
  }
  return (
    <div>
      <div className='trouble-input-flex' >
        <div className='trouble-input-left' >标题</div>
        <Input style={{ width:300 }} onChange={ getInputValue }
               data-path='TROUBLE' data-id='title'
               placeholder='输入设备编号' value={ title } />
      </div>
      <div className='trouble-input-flex' >
        <div className='trouble-input-left' >分类</div>
        <Select style={{ width:300 }} onChange={ troubleSelect }
               placeholder='压力分类字典' value={ changeTroubleType(categoryxx, troubleKinds) }  >
            {
              troubleKinds.map( (item, index) =>
              <Select.Option key={index} value={ item._id } >{item.text}</Select.Option> )
            }
        </Select>
      </div>
      <div className='trouble-input-flexs' >
        <div  className='trouble-input-lefts' >问题描述</div>
        <Input.TextArea style={{ width:300 }} onChange={ getInputValue }
               data-path='TROUBLE' data-id='content'
               placeholder='输入对设备的描述' autosize={{ minRows: 6, maxRows: 12 }}
               value={ content }/>
      </div>
      <LzEditor cbReceiver={ getValue } image={ false } video={ false }
                audio={ false } urls={ false } />
    </div>
    )
}

function troubleSelect(value){
  // console.log(value)
  dispatch('TROUBLE_GET_SELECT_VALUE', value)
}

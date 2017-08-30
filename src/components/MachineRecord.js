

import React from 'react'
import getInputValue from '../actions/getInputValue'
// import { recordKind } from '../commons/machineLable'
import Select from 'antd/lib/select'
import Input from 'antd/lib/input'
import selectValue from '../utils/selectValue'
import DatePicker from 'antd/lib/date-picker'
import dispatch from '../actions/dispatch'



export default props => {
  const { line_time, line_type, line_des, TimelineKindArr } = props
  return (
    <div onChange={affixed => console.log(affixed)} >
      <div className='machine-input-flex' >
        <div className='machine-input-left' >时间</div>
        <DatePicker onChange={ getTime } style={{ width: 400 }}
                    value={ line_time } />
      </div>
      <div className='machine-input-flex' >
          <div  className='machine-input-left'>分类</div>
          <Select style={{ width: 400 }} placeholder='选择分类'
                  onChange={ selectValue } value={ line_type } >
                  {
                    TimelineKindArr.map((item, index) =>
                      <Select.Option key={ index } value={ item.text+'/line_type' } >{ item.text }</Select.Option>)
                  }
          </Select>
        </div>
        <div className='machine-input-flexs' >
        <div className='machine-input-left' >描述</div>
        <Input.TextArea rows={4} className='machine-input-right'
                  onChange={ getInputValue }
                  style={{ width: 400 }} placeholder='输入描述'
                  data-path='MACHINE' data-id='line_des' value={ line_des } />
      </div>
    </div>
    )
}

function getTime(ment){
  dispatch('MACHINE_SELCET_TIME', ment)
}


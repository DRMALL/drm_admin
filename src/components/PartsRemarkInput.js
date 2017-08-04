

import React from 'react'
import Input from 'antd/lib/input'
import Select from 'antd/lib/select'
import getInputValue from '../actions/getInputValue'
import dispatch from '../actions/dispatch'
import store from '../commons/store'

const PartsRemarkInput = ({machineArray}) => (
  <div className='part-remark-input' >
    <div className='part-remark-input-flex' >
      <div className='part-remark-input-text' >设备编号</div>
      <SelectOption arr={ machineArray } keys='number' />
    </div>
    <div className='part-remark-input-flex' >
      <div className='part-remark-input-text' >设备名称</div>
      <SelectOption arr={ machineArray } keys='name' />
    </div>
    <div className='part-remark-input-flex' >
      <div className='part-remark-input-text' >备注</div>
      <Input.TextArea onChange={ getInputValue } style={{ width: 300 }}
                      data-path='PART' data-id='remark'
                      rows={ 6 }
                      placeholder='添加备注' ></Input.TextArea>
    </div>
  </div>
  )

export default PartsRemarkInput

//尝试了这种方式，但是不是很好

function SelectOption(props){
  const { arr, keys } = props
  return(
    <Select style={{ width: 300 }} onChange={handleChange}
            value={ changeKeys(arr,keys) }
            Focus = { true }
            showSearch
            optionFilterProp="children"
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
      {
        arr.map((item,index) =>
          <Select.Option key={ item._id } value={ item._id } >
            { item[keys] }
          </Select.Option>)
      }
    </Select>
    )
}

function handleChange(id){
  dispatch('PART_GET_MACHINE_ID', id )
}

function changeKeys(arr,keys){
  const { machineId } = store.getState().part
  if(machineId){
    const array = arr.filter(item => item._id === machineId)
    const obj = array[0]
    return obj[keys]
  }
  else  return null
}

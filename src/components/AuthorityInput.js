

import React from 'react'
import Select from 'antd/lib/select'
import Checkbox from 'antd/lib/checkbox'
import dispatch from '../actions/dispatch'
import store from '../commons/store'

const Option = Select.Option
export default props => {
  const { userNameArr, machineNameArr, newAuthorityArr } = props.state.authority
  const { num } = props
  return (
    <div className='authority-input-container' >
      <div className='authority-input-flex' >
        <div className='authority-input-text' >选择设备</div>
        <Select
          showSearch
          style={{ width: 300 }}
          placeholder="选择设备"
          optionFilterProp="children"
          onChange={handleChange}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
        {
          machineNameArr.map(item =>
            <Option value={ num + '-' + item._id } key={ item._id } >{ item.name }</Option>)
        }
        </Select>
      </div>
      <div className='authority-input-flex' >
        <div className='authority-input-text' >选择权限</div>
        <Checkbox onChange={ onChange } id='canView' num={ num } >查看权限</Checkbox>
        <Checkbox onChange={ onChange } id='canMonitor' num={ num } >监控权限</Checkbox>
      </div>
      <div className='authority-input-flex' >
        <div className='authority-input-text' >选择用户</div>
        <Select
          showSearch
          // mode='multiple'
          style={{ width: 300 }}
          onDeselect={ delSelectUser }
          onSelect={ addSelectUser }
          placeholder="选择用户"
          optionFilterProp="children"
          // onChange={handleChange}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
        {
          userNameArr.map(item =>
            <Option value={ num + '-' + item._id } key={ item._id } >{ item.name }</Option>)
        }
        </Select>
        <div style={{ visibility: (newAuthorityArr.length -1 === num) ? 'visible' : 'hidden'}} className='authority-input-icon'
             onClick={ addAuthorityInput } >
          <i className="iconfont icon-tianjiajiahaowubiankuang" style={{ width:12,height:12, color: '#fff' }}  ></i>
        </div>
      </div>
    </div>
    )
}

function handleChange(e){
  const { newAuthorityArr } = store.getState().authority
  if(typeof e ==='string'){
    let arr = e.split('-')
    let num = parseInt(arr[0], 10)
    newAuthorityArr[num].deviceId = arr[1]
    dispatch('AUTHORITY_GET_MACHINE_VALUE', newAuthorityArr )
  }
  else return
}

function addSelectUser(e){
  //目前为单选
  const { newAuthorityArr } = store.getState().authority
    let arr = e.split('-')
    let num = parseInt(arr[0], 10)
    newAuthorityArr[num].userId = arr[1]
    dispatch('AUTHORITY_GET_MACHINE_VALUE', newAuthorityArr )
}

function delSelectUser(e){
  //目前为单选,此函数无用
  const { newAuthorityArr } = store.getState().authority
    let arr = e.split('-')
    let num = parseInt(arr[0], 10)
    newAuthorityArr[num].userId = ''
    dispatch('AUTHORITY_GET_MACHINE_VALUE', newAuthorityArr )
}

function  onChange(e){
  const { id , num } = e.target
  const { newAuthorityArr } = store.getState().authority
  newAuthorityArr[num][id] = !newAuthorityArr[num][id]
  dispatch('AUTHORITY_GET_MACHINE_VALUE', newAuthorityArr )
}

function addAuthorityInput(e){
  dispatch('AUTHORITY_ADD_NEW_AUTHORITY_INPUT')
}

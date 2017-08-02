

import React from 'react'
import Select from 'antd/lib/select'
import Checkbox from 'antd/lib/checkbox'
import dispatch from '../actions/dispatch'
import store from '../commons/store'
import changeAuthIdToText from '../utils/changeAuthIdToText'
import authorityArrChange from '../utils/authorityArrChange'
import addAuthorityInput from '../utils/addAuthorityInput'
import authCheckChange from '../utils/authCheckChange'

const Option = Select.Option
export default props => {
  const { userNameArr, machineNameArr, newAuthorityArr, num, pathname } = props
  // console.log('xxx',newAuthorityArr)
  return (
    <div className='authority-input-container' >
      <div className='authority-input-flex' >
        <div className='authority-input-text' >选择设备</div>
        <Select
          showSearch
          style={{ width: 300 }}
          placeholder="选择设备"
          optionFilterProp="children"
          value={ changeAuthIdToText(newAuthorityArr[num].deviceId, machineNameArr) }
          onChange={ authorityArrChange }
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
        <Checkbox onChange={ authCheckChange } id='canView' num={ num } checked={ newAuthorityArr[num].canView } >查看权限</Checkbox>
        <Checkbox onChange={ authCheckChange } id='canMonitor' num={ num } checked={ newAuthorityArr[num].canMonitor } >监控权限</Checkbox>
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
          value={ changeAuthIdToText(newAuthorityArr[num].userId, userNameArr ) }
          // onChange={handleChange}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
        {
          userNameArr.map(item =>
            <Option value={ num + '-' + item._id } key={ item._id } >{ item.name }</Option>)
        }
        </Select>
        <div style={{ visibility: (newAuthorityArr.length -1 === num && pathname !=='/authority/edit') ? 'visible' : 'hidden'}} className='authority-input-icon'
             onClick={ addAuthorityInput } >
          <i className="iconfont icon-tianjiajiahaowubiankuang" style={{ width:12,height:12, color: '#fff' }}  ></i>
        </div>
      </div>
    </div>
    )
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




import React from 'react'
import Popover from 'antd/lib/popover'
import Popconfirm from 'antd/lib/popconfirm'
import Input from 'antd/lib/input'
import dispatch from '../actions/dispatch'
import machineTimeKindDelById from '../actions/machineTimeKindDelById'
import getMachineTimeKindById from '../actions/getMachineTimeKindById'
import editMachineTimeKind from '../actions/editMachineTimeKind'
import machineCCKindDelById from '../actions/machineCCKindDelById'
import getMachineCCKindById from '../actions/getMachineCCKindById'
import editMachineCCKind from '../actions/editMachineCCKind'
import getMachineFuleKindById from '../actions/getMachineFuleKindById'
import getMachinePresureKindById from '../actions/getMachinePresureKindById'
import editMachineFuleKind from '../actions/editMachineFuleKind'
import editMachinePresureKind from '../actions/editMachinePresureKind'
import machineFuleKindDelById from '../actions/machineFuleKindDelById'
import machinePresureKindDelById from '../actions/machinePresureKindDelById'

export default props => {
  const { array, type } = props
  const { editValue } = props.state.machine
  const content = (
    <div className='machine-kind-content'  >
      <Input value={ editValue } onChange={ getEditInputValue } />
      <div className='machine-kind-flex' >
        <div className='machine-edit-btn kind-btn' onClick={ edit } >提交修改</div>
        <Popconfirm title='确定删除此分类？' onConfirm={del} >
          <div  className='machine-edit-btn kind-btn' >删除</div>
        </Popconfirm>
      </div>
    </div>
    )

  function edit(){
    if(type==='time')  editMachineTimeKind()
    else if(type==='cc') editMachineCCKind()
    else if(type==='presure') editMachinePresureKind()
    else editMachineFuleKind()
  }
  function del(){
    if(type==='time') machineTimeKindDelById()
    else if(type==='cc') machineCCKindDelById()
    else if(type==='presure') machinePresureKindDelById()
    else machineFuleKindDelById()
  }
  function getEditInputValue(e){
    const { value } = e.target
   dispatch('MACHINE_GET_INPUT_EDIT_VALUE', value)
  }
  function getId(e){
    const { id } = e.currentTarget.dataset
    dispatch('MACHINE_KIND_ARR_GET_KIND_ID', id)
    if(type==='time') getMachineTimeKindById(id)
    else if(type==='cc') getMachineCCKindById(id)
    else if(type==='presure') getMachinePresureKindById(id)
      else getMachineFuleKindById(id)
  }
  return (
    <div className='machine-kind-arr' >
      {
        array.map(item =>
          <Popover key={ item._id } content={ content } trigger="click" >
            <div  data-id={ item._id }
                 onClick={ getId }
                 className='machine-kind-lable'  >{item.text}</div>
          </Popover>)
      }
    </div>
    )
}

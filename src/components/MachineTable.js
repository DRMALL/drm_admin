
import getMachineArr from '../actions/getMachineArr'
import Table from 'antd/lib/table'
import React from 'react'
import TableTime from './TableTime'
import TableTextHidden from './TableTextHidden'
// import TableAddress from './TableAddress'
import { browserHistory } from 'react-router'
import Modal from 'antd/lib/modal'
import machineDelById from '../actions/machineDelById'
import dispatch from '../actions/dispatch'
import Tooltip from 'antd/lib/tooltip'
import delIcon from '../images/dels.png'

export default props => {
  const { machineArr, machineModal, meta } = props.state.machine
  machineArr.map(item => {
    let condition = Number(new Date().getTime()) - Number(new Date(item.updatedAt).getTime()) > 600*1000
    if (condition)
      return item.status = '已离线'
    else
      return item.status = '运行中'
  })
  const columns =[{
    title: '设备名称',
    dataIndex: 'name',
    key: 'name',
    width: '13%'
  },{
    title: '设备编号',
    dataIndex: 'number',
    key: 'number',
    width: '8%'
  },{
    title: '排量',
    dataIndex: 'cc',
    key: 'cc',
    width: '8%'
  },{
    title: '压力',
    dataIndex: 'pressure',
    key: 'pressure',
    width: '8%'
  },{
    title: '燃料',
    dataIndex: 'combustible',
    key: 'combustible',
    width: '8%',
  },{
    title: '描述',
    dataIndex: 'description',
    key: 'description',
    width: '10%',
    render: text => TableTextHidden( text, 10)
  },{
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: '10%',
    render: text => TableTextHidden( text, 10)
  },{
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: '5%',
  },{
    title: '负责人',
    dataIndex: 'incharges',
    width: '10%',
    render: text => <div>{text.slice(0,15).join(', ')}</div>
  },{
    title: '所在地',
    dataIndex: 'location',
    width: '10%',
    render: text =>
    <div>{
      text.length ? <Tooltip title={ text.slice(0,5).map(item => {
        item = item.text
        return item
      }).join(', ') } >
        { text[0].text }
      </Tooltip> : <div></div>
    }
    </div>
  },{
    title: '添加时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: '10%',
    sorter: (a,b) => new Date(a.createdAt) - new Date(b.createdAt),
    render: text => TableTime(text, 15)
  },{
    title: '操作',
    key: 'action',
    width: '8%',
    render: (text, record) =>(
      <div className='table-icon-content' >
        <div className='table-icon-item' data-machine-id={ text._id }
             onClick={ navToMachineEdit } >
          <i className="iconfont icon-compile edit-icon" style={{ fontSize:25, color:'#579df2' }} ></i>
        </div>
        <div className='table-icon-item'
             data-machine-number={ text.number }
             data-machine-name={ text.name }
             data-machine-cc={ text.cc }
             data-machine-combustible={ text.combustible }
             data-machine-description={ text.description }
             data-machine-remark={ text.remark }
             data-machine-status={ text.status }
             data-machine-classify={ text.classify }
             data-machine-pressure={ text.pressure }
             data-machine-address={  text.location[0] ? text.location[0].text : ''  }
             onClick={ navToMachineControl } >
          <i className="iconfont icon-details details-icon" style={{ fontSize: 20 }} ></i>
        </div>
        <div className='table-icon-item' onClick={ delMachinexx } data-machine-id={ text._id }  >
          <img src={ delIcon } alt='删除' style={{ width:20,height:20 }} />
        </div>
      </div>
      )
  },]

  const pagination = {
    total: meta ? meta.count : 10,
    // pageSize: 1,
    onChange(page, size) {
      let offset = (page - 1) * size
      getMachineArr(offset)
    }
  }

  return(
    <div>
      <div style={{paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px'}}>
        <Table dataSource={ machineArr } columns={ columns } rowKey='_id' pagination={pagination} />
      </div>
      <Modal title='提示' visible={ machineModal } okText='确定' cancelText='取消'
             onOk={ machineDelById } onCancel={ cancleDelAuth }  >
        <p>确定删除此设备？</p>
      </Modal>
    </div>
    )
}

function delMachinexx(e){
  dispatch('MACHINE_GET_DEL_MACHINE_ID', e.currentTarget.dataset.machineId)
  // const { machineId } = e.currentTarget.dataset
  // console.log(machineId)
}

function cancleDelAuth(){
  dispatch('MACHINE_CANCLE_DEL_MACHINE')
}

function navToMachineEdit(e){
  const { machineId } = e.currentTarget.dataset
  localStorage.setItem('machineId', machineId)
  browserHistory.push('/machine/edit')
}

function navToMachineControl(e){  // dispatch('MACHINE_SELECT_MACHINE_NAME_AND_ADDRESS', { machineName, machineAddress })
  Object.keys(e.currentTarget.dataset).map(item => {
    localStorage.setItem(item, e.currentTarget.dataset[item])
  })
  // localStorage.setItem('machineNumber', machineNumber)
  // localStorage.setItem('machineName', machineName)
  // localStorage.setItem('machineAddress', machineAddress)
  browserHistory.push('/machine/control')
}

//设备删除

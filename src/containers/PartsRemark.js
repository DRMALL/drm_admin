

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import getMachineArr from '../actions/getMachineArr'
import PartsRemarkInput from '../components/PartsRemarkInput'
import Button from 'antd/lib/button'
import addPartRemark from '../actions/addPartRemark'


export default class PartsTable extends Component {
  componentDidMount() {
    getMachineArr()
  }
  render() {
    const { machineArr } = this.props.state.machine
    const machineArray = (machineArr&&machineArr.length) ? machineArr.map(item => {
     let items = {}
      items.name = item.name
      items.number = item.number
      items._id = item._id
      return items
    }) : []
    return(
      <div>
        <div className='part-content-title' >
          <PageTip tip='配件备注' />
        </div>
        <PartsRemarkInput machineArray={ machineArray } />
        <div style={{ paddingLeft:150 }} >
          <Button onClick={ addPartRemark } >确认提交</Button>
        </div>
      </div>
      )
  }
}

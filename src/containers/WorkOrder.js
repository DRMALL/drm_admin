

import React, { Component } from 'react'
import getWorkOrderArr from '../actions/getWorkOrderArr'
import WorkOrderTable from '../components/WorkOrderTable'
import workOrderSelect from '../utils/workOrderSelect'


export default class User extends Component {
  componentDidMount() {
    getWorkOrderArr()
  }
  render() {
    const { whichDisplay } = this.props.state.workOrder
    return(
      <div>
        <div className='workorder-title' >
          <div className={whichDisplay==='故障处理工单' ? 'workorder-title-item workorder-select' : 'workorder-title-item'}
               onClick={ workOrderSelect }  data-type='故障处理工单' >故障处理工单</div>
          <div className={whichDisplay!=='故障处理工单' ? 'workorder-title-item workorder-select' : 'workorder-title-item'}
               onClick={ workOrderSelect }  data-type='配件工单'>配件工单</div>
        </div>
        <div>
          <WorkOrderTable  { ...this.props } />
        </div>
      </div>
      )
  }
}


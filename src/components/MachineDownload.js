

import React from 'react'
import DatePicker from 'antd/lib/date-picker'
import Button from 'antd/lib/button'
import dispatch from '../actions/dispatch'
// import downLoadExcel from '../actions/downLoadExcel'
import { machineExcle } from '../commons/apis'
import moment from 'moment'
import message from 'antd/lib/message'
import request from 'superagent'

export default props => {
  const { downloadTime, machineStatusInfo } = props.state.machine
  const startTime = (new Date(moment(downloadTime[0])._d)).getTime()
  const endTime = (new Date(moment(downloadTime[1])._d)).getTime()
  const token = localStorage.getItem('token')
  function tipsExcle(){
    if(downloadTime.length) {
        request(`${machineExcle}?startTime=${startTime}&endTime=${endTime}&number=${machineStatusInfo.number}&token=${token}`)
        .then(res => {
          const result = res.body.data
          window.location.href = result
        })
        .catch(res => console.error(res))
    }
    else message.warn('请选择时间后，在导出数据!!')
  }
  return(
    <div className='machine-download-container' >
      <div className='machine-download-flex' >
        <div className='machine-download-text' >导出历史数据</div>
        <DatePicker.RangePicker onChange={ getSelectTime } />
      </div>
      <Button className='machine-download-button' onClick={ tipsExcle } >
          导出excel
      </Button>
    </div>
    )
}

function getSelectTime(dates){
  dispatch('MACHINE_GET_DWONLOAD_EXCEL_TIME', dates)
}

// function downloadData(e){
//   console.log(e)
// }

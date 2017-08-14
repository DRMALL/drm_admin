

import React from 'react'
import DatePicker from 'antd/lib/date-picker'
import Button from 'antd/lib/button'
import dispatch from '../actions/dispatch'
// import downLoadExcel from '../actions/downLoadExcel'
import { machineExcle } from '../commons/apis'
import moment from 'moment'
import message from 'antd/lib/message'

export default props => {
  const { downloadTime } = props.state.machine
  const startTime = moment(downloadTime[0]).format('YYYY-MM-DD')
  const endTime = moment(downloadTime[1]).format('YYYY-MM-DD')
  const token = localStorage.getItem('token')
  function tipsExcle(){
  if(downloadTime.length) return
  else message.warn('请选择时间后，在导出数据!!')
}
  return(
    <div className='machine-download-container' >
      <div className='machine-download-flex' >
        <div className='machine-download-text' >导出历史数据</div>
        <DatePicker.RangePicker onChange={ getSelectTime } />
      </div>
      <Button className='machine-download-button' onClick={ tipsExcle } >
        <a href={`${machineExcle}?startTime=${startTime}&endTime=${endTime}&token=${token}`} className='machine-href' target="_blank" disabled={ downloadTime.length===0 ? true : false } >
          导出excel
        </a>
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

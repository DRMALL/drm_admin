

import React from 'react'
import DatePicker from 'antd/lib/date-picker'
import Button from 'antd/lib/button'
import dispatch from '../actions/dispatch'
import downLoadExcel from '../actions/downLoadExcel'

export default props => {
  return(
    <div className='machine-download-container' >
      <div className='machine-download-flex' >
        <div className='machine-download-text' >导出历史数据</div>
        <DatePicker.RangePicker onChange={ getSelectTime } />
      </div>
      <Button className='machine-download-button'
              onClick={ downLoadExcel }>导出excel</Button>
    </div>
    )
}

function getSelectTime(dates){
  dispatch('MACHINE_GET_DWONLOAD_EXCEL_TIME', dates)
}

// function downloadData(e){
//   console.log(e)
// }

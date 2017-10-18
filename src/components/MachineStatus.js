
import Table from 'antd/lib/table'
import React from 'react'

export default props => {
  const { info } = props
  const date = (ts => {
    return new Date(ts).toLocaleString()
  })(info.ts)
  const status = (ts => {
    let condition = Number(new Date().getTime()) - Number(ts) > 600*1000
    if (condition) return '已离线'
    else return '运行中'
  })(info.ts)

  return(
    <div className='machine-info-container' >
      <div className='machine-info-flex' >
        <div className='machine-info-left' >运行状态</div>
        <div className='machine-info-right' >{ status }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >更新时间</div>
        <div className='machine-info-right' >{ date }</div>
      </div>
    </div>
    )
}

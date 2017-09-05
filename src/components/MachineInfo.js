

import React from 'react'


// export Info = ({ item }) => {
//   return (
//     <div className='machine-info-flex'  >
//       <div className='machine-info-left' >{ item.name }</div>
//       <div className='machine-info-right' >{ item.text }</div>
//     </div>
//     )
// }

parseFloat()

export default props => {
  const { machineName, machineAddress, machineStatusInfo } = props
  const waterNum = machineStatusInfo ? parseFloat(machineStatusInfo[15].value.split(' ')[0]) + parseFloat(machineStatusInfo[16].value.split(' ')[0]) : 0
  const gasNum = machineStatusInfo ? parseFloat(machineStatusInfo[7].value.split(' ')[0]) +parseFloat(machineStatusInfo[8].value.split(' ')[0]) : 0
  console.log(waterNum, gasNum)
  return(
    <div className='machine-info-container' >
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备名称</div>
        <div className='machine-info-right' >{ machineName }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备所在地</div>
        <div className='machine-info-right' >{ machineAddress }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >水流量</div>
        <div className='machine-info-right' >100 KPa</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >天然气累计流量</div>
        <div className='machine-info-right' >99.0 Kg</div>
      </div>
    </div>
    )
  }



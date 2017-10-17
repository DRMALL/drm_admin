

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
  const { machineName, machineAddress, machineStatusInfo, machineClassify, machineNumber, machinePressure, machineCombustible, machineCc, machineDescription, machineRemark } = props
  const waterNum = machineStatusInfo ? parseFloat(machineStatusInfo[15].value.split(' ')[0]) + parseFloat(machineStatusInfo[16].value.split(' ')[0]) : 0
  const gasNum = machineStatusInfo ? parseFloat(machineStatusInfo[7].value.split(' ')[0]) +parseFloat(machineStatusInfo[8].value.split(' ')[0]) : 0

  return(
    <div className='machine-info-container' >
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备名称</div>
        <div className='machine-info-right' >{ machineName }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备编号</div>
        <div className='machine-info-right' >{ machineNumber }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >压力分类</div>
        <div className='machine-info-right' >{ machinePressure }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备分类</div>
        <div className='machine-info-right' >{ machineClassify }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >燃料分类</div>
        <div className='machine-info-right' >{ machineCombustible }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >排量分类</div>
        <div className='machine-info-right' >{ machineCc }</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备所在地</div>
        <div className='machine-info-right' >{ machineAddress }</div>
      </div>
      <div className='machine-info-flex-big'>
        <div className='machine-info-left-big' >设备描述</div>
        <div className='machine-info-right-big' >{ machineDescription }</div>
      </div>
      <div className='machine-info-flex-big' >
        <div className='machine-info-left-big' >设备备注</div>
        <div className='machine-info-right-big' >{ machineRemark }</div>
      </div>
    </div>
    )
  }



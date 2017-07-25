

import React from 'react'


export default props => {
  return(
    <div className='machine-info-container' >
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备名称</div>
        <div className='machine-info-right' >设备名称</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >设备所在地</div>
        <div className='machine-info-right' >设备所在地</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >水流量</div>
        <div className='machine-info-right' >100 KPa</div>
      </div>
      <div className='machine-info-flex' >
        <div className='machine-info-left' >天然气累计流量</div>
        <div className='machine-info-right' >99.0 KG</div>
      </div>
      <div className='machine-info-flexs' >
        <div className='machine-info-lefts' >运行示图</div>
        <div className='machine-info-rights' >
          <img src='http://img3.3lian.com/2013/s2/11/d/50.jpg'
               className='machine-info-img'
               alt='运行示图'  />
        </div>
      </div>
    </div>
    )
}

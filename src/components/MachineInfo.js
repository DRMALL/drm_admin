

import React from 'react'


let Info = ({ item }) => {
  return (
    <div className={item.url ? 'machine-info-flexs' :'machine-info-flex' } >
      <div className={ item.url ? 'machine-info-lefts' : 'machine-info-left' }>
        { item.name }
      </div>
      <div className='machine-info-right' style={{ display: item.url ? 'none' : 'block' }}  >{ item.text }</div>
      <div className='machine-info-rights' style={{ display: item.url ? 'block' : 'none' }}  >
          <img src={ item.url }
               className='machine-info-img'
               alt='运行示图'  />
        </div>
    </div>
    )
}


export default props => {
  const arr = [{ name: '设备名称', text: '设备名称' },
               { name: '设备所在地', text: '设备所在地' },
               { name: '水流量', text: '100 KPa' },
               { name: '天然气累计流量', text: '99.0 KG' },
               { name: '运行示图', url: 'http://img3.3lian.com/2013/s2/11/d/50.jpg' },
            ]
  return(
    <div className='machine-info-container' >
      {
        arr.map((item, index) => <Info key={ index } item={ item } /> )
      }
    </div>
    )
}

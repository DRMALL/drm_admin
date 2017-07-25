

import React from 'react'
import Timeline from 'antd/lib/timeline'


const MachineTimeline = ({ timelines }) => (
  <div>
      {   (timelines.length) ?
          <Timeline className='machine-timeline' >
            {
              timelines.map((item, index) =>
                <Timeline.Item key={ index } >
                  <span className='machine-time-time' >{ item.time }</span>
                  <span className='machine-time-type' ><b>{ item.timetype }:</b></span>
                  <span className='machine-time-des' >{ item.timedes }</span>
                </Timeline.Item>
                )
            }
          </Timeline> :
          <div></div>
      }
  </div>
  )

export default MachineTimeline

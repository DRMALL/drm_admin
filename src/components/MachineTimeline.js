

import React from 'react'
import Timeline from 'antd/lib/timeline'
import moment from 'moment'


const MachineTimeline = ({ timelines }) => (
  <div>
      {   (timelines.length) ?
          <Timeline className='machine-timeline' >
            {
              timelines.map((item, index) =>
                  <Timeline.Item key={ index } onClick={ getTimeLineId }
                                 data-timeline-id={ item._id } >
                    <span className='machine-time-time' >{ moment(item.line_time).format('YYYY-MM-DD') }</span>
                    <span className='machine-time-type' ><b>{ item.line_type }:</b></span>
                    <span className='machine-time-des' >{ item.line_des }</span>
                  </Timeline.Item>
                )
            }
          </Timeline> :
          <div></div>
      }
  </div>
  )

export default MachineTimeline

// function timeLineDel(e){
//   console.log('xxx')
// }

function getTimeLineId(e){
  const { timelineId } = e.currentTarget.dataset
  console.log(timelineId)
}

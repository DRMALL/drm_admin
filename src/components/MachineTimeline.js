

import React from 'react'
import Timeline from 'antd/lib/timeline'

export default props => {
  const { timelines } = props.state.machine
  console.log(timelines.length)
  return(
    <Timeline>
      {
        timelines.length&timelines.map((item, index) =>
          <Timeline.Item key={ index } >
            <span>{ item.time }</span>
            <span>{ item.timetype }</span>
            <span>{ item.timedes }</span>
          </Timeline.Item>
          )
      }
    </Timeline>
    )
}

// const MachineTimeline = ({ timelines }) => (
//   <div>
//     <Timeline>
//       {
//         timelines.length&timelines.map((item, index) =>
//           <Timeline.item key={ index } >
//             <span>{ item.time }</span>
//             <span>{ item.timetype }</span>
//             <span>{ item.timedes }</span>
//           </Timeline.item>
//           )
//       }
//     </Timeline>
//   </div>
//   )

// export default MachineTimeline



import React from 'react'
import Timeline from 'antd/lib/timeline'
import moment from 'moment'
import Popover from 'antd/lib/popover'
import Popconfirm from 'antd/lib/popconfirm'
import dispatch from '../actions/dispatch'
import machineTimelineDelById from '../actions/machineTimelineDelById'
import { browserHistory } from 'react-router'
import Button from 'antd/lib/button'


const MachineTimeline = ({ timelines }) =>{
  const content =(
          <div className='edit-timeline' >
            <Popconfirm title='确定删除此信息？' onConfirm={machineTimelineDelById} >
              <Button >删除</Button>
            </Popconfirm>
            <Button onClick={ navToTimeLineEdit } >编辑</Button>
          </div>
          )
  return(
  <div>
      {   (timelines.length) ?
          <Timeline className='machine-timeline' >
            {
              timelines.map((item, index) =>
                  <Timeline.Item key={ index }  >
                  <Popover content={content} title="操作" placement="topRight"
                           trigger="click"  >
                    <div onClick={ getTimeLineId } style={{ width: 400 }}
                         data-timeline-id={ item._id }>
                      <span className='machine-time-time' >{ moment(item.line_time).format('YYYY-MM-DD') }</span>
                      <span className='machine-time-type' ><b>{ item.line_type }:</b></span>
                      <span className='machine-time-des' >{ item.line_des }</span>
                    </div>
                  </Popover>
                  </Timeline.Item>
                )
            }
          </Timeline> :
          <div></div>
      }
  </div>
  )
}

export default MachineTimeline

function navToTimeLineEdit(){
  browserHistory.push('/machine/edit/timeline')
}

function getTimeLineId(e){
  const { timelineId } = e.currentTarget.dataset
  dispatch('MACHINE_GET_TIME_LINE_ID', timelineId )
}

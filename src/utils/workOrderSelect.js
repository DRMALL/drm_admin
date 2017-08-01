
import dispatch from '../actions/dispatch'

function workOrderSelect(e){

  const { type } = e.currentTarget.dataset
  if(type==='故障处理工单')
    dispatch('WORKORDER_DISPLAY_TROUBLE_ORDER', type )
  else dispatch('WORKORDER_DISPLAY_PART_ORDER', type)
}

export default workOrderSelect

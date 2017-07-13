

import React from 'react'
import TroubleInput from '../components/TroubleInput'
import Button from 'antd/lib/button'
import troubleAdd from '../actions/troubleAdd'


export default props => {
  console.log(props.state.trouble)
  return(
    <div>
      <div className='trouble-new-title' >添加故障</div>
      <div className='trouble-new-content' >
        <TroubleInput  { ...props } />
        <Button onClick={ troubleAdd } data-method='post'
                className='trouble-new-button' >确认提交</Button>
      </div>
    </div>
    )
}

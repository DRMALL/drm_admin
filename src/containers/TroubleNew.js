

import React, { Component } from 'react'
import TroubleInput from '../components/TroubleInput'
// import Button from 'antd/lib/button'
import troubleAdd from '../actions/troubleAdd'
import getTroubleKindArr from '../actions/getTroubleKindArr'
import dispatch from '../actions/dispatch'


export default class TroubleNew extends Component {
  componentDidMount() {
    getTroubleKindArr()
    dispatch('TROUBLE_NEW_RESET')
  }
  render() {
    console.log(this.props.state.trouble)
    return(
    <div>
      <div className='trouble-new-title' >添加故障</div>
      <div className='trouble-new-content' >
        <TroubleInput  { ...this.props } />
        <div style={{display: 'flex'}}>
          <div onClick={ troubleAdd } data-method='post'
                className='trouble-new-button machine-edit-btn' >确认提交</div>
        </div>
      </div>
    </div>
      )
  }
}




import React, { Component } from 'react'
import getTroubleById from '../actions/getTroubleById'
import troubleEdit from '../actions/troubleEdit'
import TroubleInput from '../components/TroubleInput'
import Button from 'antd/lib/button'
import getTroubleKindArr from '../actions/getTroubleKindArr'
import dispatch from '../actions/dispatch'

export default class TroubleEdit extends Component {
  componentDidMount() {
    getTroubleById(localStorage.getItem('troubleId'))
    getTroubleKindArr()
    dispatch('TROUBLE_EDITOR_CAN')
  }
  render() {
    return(
      <div>
        <div className='trouble-new-title' >编辑故障信息</div>
        <div className='trouble-new-content' >
          <TroubleInput  { ...this.props } />
          <Button onClick={ troubleEdit } className='trouble-new-button' >确认提交</Button>
        </div>
      </div>
      )
  }
}



import React, { Component } from 'react'
import Input from 'antd/lib/input'
import Button from 'antd/lib/button'
import getInputValue from '../actions/getInputValue'
import TroubleKindNew from '../actions/TroubleKindNew'
import getTroubleKindArr from '../actions/getTroubleKindArr'
import TroubleKindArr from '../components/TroubleKindArr'
import PageTip from '../components/PageTip'

export default class TroubleKind extends Component {
  componentDidMount(){
    getTroubleKindArr()
  }
  render() {
    console.log(this.props.state.trouble)
    const { troubleKinds, kind } = this.props.state.trouble
    return(
      <div className='trouble-kind-container' >
        <div className='trouble-kind-tip' >
        <PageTip tip='分类管理' />
        </div>
        <TroubleKindArr troubleKinds={ troubleKinds } />
        <Input data-path='TROUBLE' data-id='kind' onChange={ getInputValue }
               style={{ width: 200, marginRight: 30 }} value={ kind }  />
        <Button onClick={ TroubleKindNew } >添加</Button>
      </div>
      )
  }
}

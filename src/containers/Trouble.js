

import React, { Component } from 'react'
import TroubleTitle from '../components/TroubleTitle'
import { conentHeadStr } from '../commons/contentStr'
import getTroubleArr from '../actions/getTroubleArr'
import getTroubleKindArr from '../actions/getTroubleKindArr'
import TroubleTable from '../components/TroubleTable'



export default class User extends Component {
  async componentDidMount() {
    try {
      await getTroubleArr()
      await getTroubleKindArr()
    } catch (e) {
      console.error('出错了！')
    }

    // .then(() => getTroubleKindArr())
    // .catch(() => console.error('出错了！'))
  }
  render() {
    // console.log(this.props.state.trouble)
    return(
      <div className='user-container' >
        <TroubleTitle head={ conentHeadStr.trouble } />
        <TroubleTable { ...this.props } />
      </div>
      )
  }
}

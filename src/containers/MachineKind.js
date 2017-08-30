

import React, { Component } from 'react'
import PageTip from '../components/PageTip'
import getMachineTimeKindArr from '../actions/getMachineTimeKindArr'
import MachineKindInput from '../components/MachineKindInput'
import MachineKindArr from '../components/MachineKindArr'
import addMachineTimeKind from '../actions/addMachineTimeKind'
import addMachineCCKind from '../actions/addMachineCCKind'
import getMachineCCKindArr from '../actions/getMachineCCKindArr'
import getMachineFuleKindArr from '../actions/getMachineFuleKindArr'
import getMachinePresureKindArr from '../actions/getMachinePresureKindArr'
import addMachineFuleKind from '../actions/addMachineFuleKind'
import addMachinePresureKind from '../actions/addMachinePresureKind'


export default class MachineKind extends Component {
  componentDidMount() {
    Promise.all([getMachineTimeKindArr(), getMachineCCKindArr(), getMachinePresureKindArr(), getMachineFuleKindArr()])
  }
  render() {
    const { TimelineKindArr, timelineKind, KindId, CCKind, CCKindArr, presureKindArr, fuleKindArr, presureKind, fuleKind } = this.props.state.machine
    console.log('TimelineKindArr',TimelineKindArr)
    console.log(KindId)
    return(
      <div>
        <div style={{ padding: 25 }} >
          <PageTip tip='时间线分类管理' />
          <MachineKindArr array={ TimelineKindArr } { ...this.props } type='time' />
          <MachineKindInput id='timelineKind' func={ addMachineTimeKind }
                            value={ timelineKind } />
        </div>
        <div style={{ padding: 25 }} >
          <PageTip tip='排量分类管理' />
          <MachineKindArr array={ CCKindArr } { ...this.props } type='cc'/>
          <MachineKindInput id='CCKind' func={ addMachineCCKind }
                            value={ CCKind } />
        </div>
        <div style={{ padding: 25 }} >
          <PageTip tip='压力分类管理' />
          <MachineKindArr array={ presureKindArr } { ...this.props } type='presure'/>
          <MachineKindInput id='presureKind' func={ addMachinePresureKind }
                            value={ presureKind } />
        </div>
        <div style={{ padding: 25 }} >
          <PageTip tip='燃料分类管理' />
          <MachineKindArr array={ fuleKindArr } { ...this.props } type='fule'/>
          <MachineKindInput id='fuleKind' func={ addMachineFuleKind }
                            value={ fuleKind } />
        </div>
      </div>
      )
  }
}



import { machineStatusInfo } from '../commons/apis'
import dispatch from './dispatch'
import Httpid from './Httpid'

export default number => {
  const token = localStorage.getItem('token')
  const infoArrText =  [{text:'氧气入口压力1', unit: 'Mpa' },
                        {text:'氧气流量1', unit: 'Kg/h' },
                        {text:'氧气累积流量1', unit: 'Kg' },
                        {text:'天然气入口压力1', unit: 'Mpa' },
                        {text:'天然气出口压力1', unit: 'Mpa' },
                        {text:'天然气流量1', unit: 'Kg/h' },
                        {text:'天然气流量2', unit: 'Kg/h' },
                        {text:'天然气累积流量1', unit: 'Kg' },
                        {text:'天然气累积流量2', unit: 'Kg' },
                        {text:'水泵入口压力1', unit: 'Mpa' },
                        {text:'水泵入口压力2', unit: 'Mpa' },
                        {text:'水泵出口压力1', unit: 'Mpa' },
                        {text:'水泵出口压力2', unit: 'Mpa' },
                        {text:'水流量1', unit: 'T/h' },
                        {text:'水流量2', unit: 'T/h' },
                        {text:'水累积流量1', unit: 'T' },
                        {text:'水累积流量2', unit: 'T' },
                        {text:'热载体温度1', unit: '℃' },
                        {text:'热载体温度2', unit: '℃' },
                        {text:'热载体压力1', unit: 'Mpa' },
                        {text:'热载体压力1', unit: 'Mpa' },
                        {text:'冷却水温度1', unit: '℃' },
                        {text:'冷却水温度2', unit: '℃' },
                        {text:'空燃比1', unit: '' },
                        {text:'可燃气1含量', unit: '%' },
                        {text:'可燃气2含量', unit: '%' },
                        {text:'可燃气3含量', unit: '%' },
                        {text:'水箱PV', unit: 'm' },
                        {text:'水箱SV', unit: 'm' },
                        {text:'冷却水温度PV', unit: '℃' },
                        {text:'冷却水温度SV', unit: '℃' },
                        {text:'加热水箱', unit: '℃' },
                        {text:'压缩空气', unit: 'Mpa' },

                    ]
  Httpid(`${machineStatusInfo}?number=${number}&token=${token}`, 'get', false)
  .then(res => {
    console.log(33333333333, res)
    const result = res.body.data.data
    // let arr = result.map((item, index )=> {
    //    item.name = infoArrText[index].name
    //    item.value = item.value + ' ' + infoArrText[index].unit
    //    return item
    // })
    dispatch('MACHINE_GET_MACHINE_STATUS_INFO_BY_ID', result)
  })
  .catch(res => console.error(res))
}

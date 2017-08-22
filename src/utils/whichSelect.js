
import { siderArr } from '../commons/siderItem'


export default (str) => {
  const a = str.split('/')[1]
  let sidArr = siderArr.slice(0, siderArr.length)
  let arr = sidArr.map(item => {
      item.pathname = item.path.split('/')[1]
      return item
    })
  let array = arr.filter(item => item.pathname===a)
  if(array.length){
    let string = array[0].value
    return string
  }
  else return sidArr[0].value
  // switch(a){
  //   case 'message':
  //     return '信息推送'
  //   case 'machine':
  //     return '设备管理'
  //   case 'trouble':
  //     return '故障诊断'
  //   case 'parts':
  //     return '配件管理'
  //   case 'user':
  //     return '用户管理'
  //   case 'authority':
  //     return '权限管理'
  //   case 'workOrder':
  //     return '工单管理'
  //   default :
  //     return '信息推送'
  // }
}

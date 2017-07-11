

export default (str) => {
  switch(str){
    case '/message':
      return '信息推送'
    case '/machine':
      return '设备管理'
    case '/trouble':
      return '故障排除'
    case '/parts':
      return '配件管理'
    case '/user':
      return '用户管理'
    case '/authority':
      return '权限管理'
    case '/workOrder':
      return '工单管理'
    default :
      return null
  }
}

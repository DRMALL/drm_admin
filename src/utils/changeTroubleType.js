

export default str => {
  switch(str){
    case 'common':
      return '常见问题'
    case 'standard':
      return '操作规范'
    case 'secure':
      return '安全规程'
    case 'unit':
      return '单位换算'
    default :
      return ''
  }
}

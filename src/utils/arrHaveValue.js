

function arrHaveValue(arr){
  const array = arr.filter(item => {
   if(item.userId&&item.deviceId&&(item.canView||item.canMonitor)) return true
    else return false
  })
  let a = array.length === arr.length ? true : false
  return a
}



export default arrHaveValue

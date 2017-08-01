

function limitStr(str, num){
  let strs = (str.length >num) ? str.slice(0,num) : str
  return strs
}

export default limitStr

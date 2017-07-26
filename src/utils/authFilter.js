

function authFilter(arr){
  if(arr.length){
    let array = arr.map(item => {
        item.text =item.name
        item.value = item.name
        return item
    })
    return array
  }
  else return [{ text: '没有用户', value: '没有用户' }]

}

export default authFilter



function changeAuthIdToText(id, array){
   let arr = array.filter(item => item._id ===id)
   if(arr.length) return arr[0].name
   else return null
}

export default changeAuthIdToText


import dispatch from '../actions/dispatch'

function change(){
  console.log('刷新验证码')
  getStr()
  getStar()
}

function getStr(e){
  const str = '6z7x9c56v5b48n176m4a7s4d4fg2h5j8kl3q4w0e2r6t4yu5i4o4p'
  const strArr = str.split('')
  // const arr = [1,5,6,5,7,8]
  const arr = [{ text: 1, degree: 10 },
               { text: 2, degree: 5 },
               { text: 2, degree: 15 },
               { text: 2, degree: -5 },
               { text: 2, degree: -15 },
               { text: 2, degree: 10 },]
  let array = arr.map(item => {
    item.text = strArr[getNum(52)]
    item.degree = getDegree()
    return item
  } )
  dispatch('LOGIN_GET_VERIFY_NUM', array)
}

function getDegree(){
  return (Math.random()>0.5) ? getNum(20) : -(getNum(20))
}

function getNum(num){
  const a = Math.random()*num
  return Math.round(a)
}

function getStar(){
  const arr = [{ size: 1, y: 10, point: 6 },
               { size: 1, y: 10, point: 6 },
               { size: 1, y: 10, point: 6 },
               { size: 1, y: 10, point: 6 },
               { size: 1, y: 10, point: 6 },]
 let  array = arr.map(item => {
    item.size = getNum(5) + 5
    item.y = getNum(30) + 20
    item.point = getNum(2) + 5
    return item
  })
  dispatch('LOGIN_GET_VERIFY_BG', array)
}

export default change

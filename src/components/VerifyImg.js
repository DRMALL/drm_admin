

import React, { Component } from 'react'
import {Layer, Stage, Text, Star} from 'react-konva'
import dispatch from '../actions/dispatch'
// import store from '../commons/store'

// try drag& drop rectangle
export default class MyImage extends Component{
    componentDidMount() {
      getStr()
      getStar()
    }
    render() {
      const { verifyArr, verifyBgStar } = this.props.state.login
        return (
        <Stage width={200} height={70} onClick={ change } >
          <Layer >
          {
           verifyArr.map((item,index) =>
            <Text   x= {10+20*index}
                    key = { index }
                    y={15}
                    scaleX={ 2 }
                    scaleY={ 1.5 }
                    padding={ 5 }
                    text={item.text}
                    rotation={ item.degree }
                    fontSize= {20}
                    fontFamily= {'AnJingChenYWc4bf61f8a19de2'}
                    fill={ 'green'}
               />)
          }
          {
            verifyBgStar.map((item, index) =>
            <Star numPoints= { item.point } x={ 20 +index*45 } y={ item.y } fill={ 'red' }
                innerRadius={ 2*item.size } outerRadius={ item.size }
                key={ index }
                opacity={ 0.2 } /> )
            }
          </Layer>
        </Stage>
        );
    }
}

function change(){
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

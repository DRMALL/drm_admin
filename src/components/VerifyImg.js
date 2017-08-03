

// import React from 'react'
// // import ReactDOM from 'react-dom'
// import {Layer, Rect, Stage, Group} from 'react-konva'


// const VerifyImg = () => {
//   return (
//     <div>
//       <div>看不清？点击刷新下一张</div>
//       <Stage width={100} height={50}>
//         <Layer>
//           <Rect
//                 x={10} y={10} width={50} height={50}
//                 fill={'#553353'}
//                 shadowBlur={10}
//                 // onClick={handleClick}
//             />
//         </Layer>
//       </Stage>
//     </div>
//     )
// }

// export default VerifyImg

import React, { Component } from 'react'
import {Layer, Stage, Image, Text, Star} from 'react-konva'
import dispatch from '../actions/dispatch'
import store from '../commons/store'

// try drag& drop rectangle
export default class MyImage extends Component{
  state = {
    image: null
  }
    componentWillMount() {
       const image = new window.Image();
      image.src = 'http://www.tukuwa.com/uploadfile/2012/1020/20121020100014909.jpg';
      image.onload = () => {
        this.setState({
          image: image
        });
      }
      getStr()
    }
    render() {
      const { verifyArr } = store.getState().login
      console.log(verifyArr)
        return (
        <Stage width={200} height={200} onClick={ getStr } >
          <Layer >
          {
           verifyArr.map((item,index) =>
            <Text   x= {10+20*index}
                    key = { index }
                    y={15}
                    scaleX={ 2 }
                    scaleY={ 1.5 }
                    padding={ 5 }
                    fillPatternImage={ <img src='http://www.tukuwa.com/uploadfile/2012/1020/20121020100014909.jpg' alt='填充图片' /> }
                    text={item}
                    rotation={ (Math.random()>0.5) ? item*2 : -(item*2) }
                    // fontSize= {30}
                    fontFamily= {'Philingc4b24b46519de2'}
                    fill={ 'green'}
               />)
          }
          <Star numPoints= {6} x={ 20 } y={ 20 } fill={ 'red' }
                // stroke={ 'black' }
                innerRadius={ 20 } outerRadius={ 10 }
                opacity={ 0.3 } />
          <Image image={this.state.image}  width={ 100 }
            height={100} opacity={ 0.5 }  />
          </Layer>
        </Stage>
        );
    }
}

function getStr(e){
  const arr = [1,5,6,5,7,8]
  let array = arr.map(item => item = getNum(9).toString() )
  dispatch('LOGIN_GET_VERIFY_NUM', array)
}

function getDegree(){
  const arr = [ 10, -13, 15, 8, 10, 5 ]
}

function getNum(num){
  const a = Math.random()*num
  return Math.round(a)
}


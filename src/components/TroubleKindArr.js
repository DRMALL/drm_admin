

import React from 'react'
import troubleKindToTop from '../actions/troubleKindToTop'
import troubleKindDel from '../actions/troubleKindDel'
import Popconfirm from 'antd/lib/popconfirm'
import dispatch from '../actions/dispatch'


export default  ({ troubleKinds })=> (
    <div>
      {
        troubleKinds.map( (item, index) =>
        <div key={ item._id } className='trouble-kind-arr'  >
          <div className='troubel-kind-left' >{ item.text }</div>
          <i className='iconfont icon-zhiding troubel-kind-mid'
             data-id={ item._id }  style={{ visibility: index===0 ? 'hidden' : 'visible' }}
             onClick={ troubleKindToTop } ></i>
          <Popconfirm title='确定删除本条分类? 删除后本类下的内容将归于其他'
                      onConfirm={ troubleKindDel }
                      okText="确定" cancelText="取消"
                      data-id={ item._id } >
            <i className='iconfont icon-shanchu troubel-kind-right'
               data-id={ item._id }
               onClick={ getKindId }  ></i>
          </Popconfirm>
        </div> )
      }
    </div>
  )

function getKindId(e){
  dispatch('TROUBLE_GET_TROUBLE_KIND_ID', e.currentTarget.dataset.id)
}

// function confirmDelKind(e){
//     console.log(e.currentTarget.dataset)
//     // onClick={ troubleKindDel }
// }


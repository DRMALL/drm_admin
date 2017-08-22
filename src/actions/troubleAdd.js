

import { troubleAction } from '../commons/apis'
import Http from './Http'
import store from '../commons/store'
import dispatch from './dispatch'
import message from 'antd/lib/message'
import getRichEditorValue from '../utils/getRichEditorValue'


export default e => {
  const { method } = e.currentTarget.dataset
  const { title, categoryxx, content } = store.getState().trouble
  let con = getRichEditorValue(content)
  if(title&&categoryxx&&con){
  dispatch('TROUBLE_ADD_START')
  let category = categoryxx
  let data = { title, category, content }
    console.log(data)
  Http( troubleAction, method, true, data )
  .then(res => dispatch('TROUBLE_ADD_RESET'))
  .catch(res => console.error(res))
  }
  else troubletTip(title,categoryxx,con)
}

function troubletTip(title,categoryxx,con){
  let str = !title ? '标题' : !categoryxx ? '分类' : '问题描述'
  message.warning(`请输入${str}后再次尝试`)
}

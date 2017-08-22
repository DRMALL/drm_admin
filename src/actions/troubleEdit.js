

import { troubleAction } from '../commons/apis'
import Http from './Http'
import store from '../commons/store'
import dispatch from './dispatch'
import message from 'antd/lib/message'
import { browserHistory } from 'react-router'
import getRichEditorValue from '../utils/getRichEditorValue'


export default e => {
  const { title, categoryxx, content } = store.getState().trouble
  const id = localStorage.getItem('troubleId')
  let con = getRichEditorValue(content)
  if(title&&categoryxx&&con){
  let category = categoryxx
  let data = { title, category, content }
  Http( `${troubleAction}/${id}`, 'put', true, data )
  .then(res => {
    browserHistory.push('/trouble')
    dispatch('TROUBLE_ADD_RESET')
})
  .catch(res => console.error(res))
  }
  else troubletTip(title,categoryxx,con)
}

function troubletTip(title,categoryxx,con){
  let str = !title ? '标题' : !categoryxx ? '分类' : '问题描述'
  message.warning(`请输入${str}后再次尝试`)
}

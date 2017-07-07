

import React from 'react'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Input from 'antd/lib/input'
import store from '../commons/store'
import { userInput } from '../commons/userCommon'
import getInputValue from '../actions/getInputValue'

const UserInfoInput = () => (
    <div>
        {
          userInput.map((item, index) =>
          <Row key={ index } className='new-user-item'  >
            <Col span={3} className='new-user-item-left' >{item.title}</Col>
            <Col span={7} ><Input data-id={ item.id } data-path={ item.path }
                        onChange={ getInputValue }
                        value={ changeValue(item.id) }
                        placeholder={ `输入${item.title}` } /></Col>
          </Row> )
        }
    </div>
  )

export default UserInfoInput

function changeValue(str){
  const { name, password, email, phone, company_name, address } = store.getState().user
  switch(str){
    case 'name':
      return name
    case 'password':
      return password
    case 'email':
      return email
    case 'phone':
      return phone
    case 'company_name':
      return company_name
    case 'address':
      return address
    default:
      return ''
  }
}

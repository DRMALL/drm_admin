

import AuthorityInputs from './AuthorityInputs'
import React from 'react'
import renderer from 'react-test-renderer'



it('AuthorityInputs test', () => {
  const newAuthorityArr = [
  {canMonitor:false, canView:false, deviceId:"",userId: ''}
  ]
  const machineNameArr = [
  {name: '设备名称', _id: '34534e35' },
  {name: '钻井', _id: '34534e36' },
  {name: '石油开采', _id: '34534e37' }
  ]
  const userNameArr = [
  {name: '张三', _id: '3453fe34' },
  {name: '李四', _id: '3453fe35' },
  ]
  const pathname = '/authority/new'
  const num = 0
  const index = 0
  const tree =  renderer.create(<AuthorityInputs pathname={ pathname }
                                newAuthorityArr={ newAuthorityArr }
                                userNameArr={ userNameArr }
                                machineNameArr={ machineNameArr }
                                num={ index }
                                key={index}/>)
  expect(tree).toMatchSnapshot()
})

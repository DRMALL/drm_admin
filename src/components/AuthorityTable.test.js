

import AuthorityTable from './AuthorityTable'
// import renderer from 'react-test-renderer'
import React from 'react'
import { render } from 'enzyme'
import toJson from 'enzyme-to-json'


it('AuthorityTable test', () => {
  const authorityArray = [{
canMonitor:true,
canView:true,
createdAt:"2017-07-28T11:46:32.667Z",
device:{ name: "设备名称", number: 'a42355', _id: 'dgtre2533' },
updatedAt: "2017-08-02T02:07:54.294Z",
user: { name: "李四", _id: 'asffdg23235' },
__v:0,
_id: 'frghs3453464',
},{
canMonitor:true,
canView:false,
createdAt:"2017-07-28T11:46:32.667Z",
device:{ name: "设备名称2", number: 'a42356', _id: 'dgtre2553' },
updatedAt: "2017-08-02T02:07:54.294Z",
user: { name: "张三", _id: 'asffdg232242' },
__v:0,
_id: 'frghs3455367',
},{
canMonitor:false,
canView:true,
createdAt:"2017-07-28T11:46:32.667Z",
device:{ name: "设备名称3", number: 'a42357', _id: 'dgtre2524' },
updatedAt: "2017-08-02T02:07:54.294Z",
user: { name: "王二", _id: 'asffdg23224' },
__v:0,
_id: 'frghs3453473',
}]

const userNameArr = [
      {name: '张三', _id: 'asffdg232242'},
      { name: "王二", _id: 'asffdg23224' },
      { name: "李四", _id: 'asffdg23235' }
         ]

const machineNameArr = [
      { name: "设备名称", number: 'a42355', _id: 'dgtre2533' },
      { name: "设备名称2", number: 'a42356', _id: 'dgtre2553' },
      { name: "设备名称3", number: 'a42357', _id: 'dgtre2524' }]

const wrapper = render(<AuthorityTable authorityArray={ authorityArray }
                          userNameArr={ userNameArr }
                          machineNameArr={ machineNameArr } />)
        expect(toJson(wrapper)).toMatchSnapshot()
})

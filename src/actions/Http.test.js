

import { userAction, newUser } from '../commons/apis'
import setUpfiles from '../setUpfiles'
//mock一个全局的localStorage，这里直接引入就行了。。。
import Http from './Http'
import request from 'superagent'
import mocker from 'superagent-mocker'

let mock = mocker(request)

it('Http test for get', () => {
    const body = {code: 200, message: '获取用户信息成功', data: [{ address: "广东省潮州市潮安区", company_name: "新潮科技" }] }

    mock.get(`${userAction}?token=*`, function(req) {
      return { body: body }
    });
    expect.assertions(1);
    return Http( userAction, 'get', false )
            .then(e =>{
              expect(e).toEqual({ body: body, status: 200})
            }
  );
})

it('Http test for post', () => {

    const data = { name: '小明', password: '12345', email: '65464146@qq.com', code: 201 }
    //为了方便数据构造，直接在post数据中添加了code码，这应该是不规范的
    mock.post(`${newUser}?token=*`, function(req) {
      // const body = req.body
      // body.code = 201
      return { body: data }
    });
    expect.assertions(1)
    return Http( newUser, 'post', false, data )
            .then(e =>{
              // let body = data
              // body.code = 201
              expect(e).toEqual({ body: data, status: 200})
            }
  );
})

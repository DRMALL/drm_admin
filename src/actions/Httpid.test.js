

import setUpfiles from '../setUpfiles'
//mock一个全局的localStorage，这里直接引入就行了。。。
import Httpid from './Httpid'
import request from 'superagent'
import mocker from 'superagent-mocker'
import store from '../commons/store'

let mock = mocker(request)
let api = 'xxxx'
it('Httpid test for get', () => {
    mock.get(api, function(req) {
      return { body: { code: 200 } }
    });
    expect.assertions(1);
    return Httpid( api, 'get', false )
            .then(e =>{
              expect(e.body.code).toEqual(200)
            }
  );
})


it('Http test for postxxx', () => {

    mock.post(api, function(req) {
      return { body: { code:201 }}
    })
    expect.assertions(1)
    return Httpid( api, 'post', false, {} )
            .then(e =>{
              expect(e.body.code).toEqual(201)
            })
})


import notification from 'antd/lib/notification'
import request from 'superagent'
import resetLogin from './resetLogin'

export default (api, method, tip, data ) => {
	return new Promise((resolve, reject) => {
     const token = localStorage.getItem('token')
     if(method==='get'){
     	request
     	.get(`${api}?token=${token}`)
     	.then(res =>{
     		if(res.body.code===200){
     			success(res, tip)
     			 resolve(res)
     		}
     		else if(res.body.code===402) resetLogin()
     		else {
     			fail()
     			reject(res)
     		}
     	})
     	.catch(res => {
     		fail()
     		reject(res)
     	})
     }
     else if(method==='post') {
     	request
     	.post(`${api}?token=${token}`)
     	.send(data)
     	.then(res =>{
     		if(res.body.code===201){
     			success(res, tip)
     			resolve(res)
     		}
     		else if(res.body.code===402) resetLogin()
     		else {
     			fail()
     			reject(res)
     		}
     	})
     	.catch(res => {
     		fail()
     		reject(res)
     	})
     }
     else  {
     	request
     	.put(`${api}?token=${token}`)
     	.send(data)
     	.then(res =>{
     		if(res.body.code===201){
     			success(res, tip)
     			resolve(res)
     		}
     		else if(res.body.code===402) resetLogin()
     		else {
     			fail()
     			reject(res)
     		}
     	})
     	.catch(res => {
     		fail()
     		reject(res)
     	})
     }
	})
}

function success(res, tip) {
	if(!tip) console.log('忽略')
	else {
		notification.success({
			message: '提示',
			description: res.body.message ? res.body.message : '获取数据成功!'
		})
	}

}

function fail(res) {
		notification.error({
			message: '提示',
			description: res.body.message ? res.body.message : '获取数据失败!'
		})
}
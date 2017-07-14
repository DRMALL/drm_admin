

import io from 'socket.io-client'

export default () => {
  const socket = io('http://192.168.2.236:3000')
  console.log(socket)
  socket.on('connect', () => console.log('connect') )
  socket.on('newteo', function(data){
    console.log('xxx',data)
  })
  console.log('xxxxxxxx')
}



import io from 'socket.io-client'

export default () => {
  const socket = io('http://192.168.2.236:3000/socket')
  const id = localStorage.getItem('workOrderId')
  socket.on('connect', function(){
    console.log(id)
    socket.emit('orderIsHandled', id , function(data){
      console.log(data)
    })
  }
   )
}

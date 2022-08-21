const socket = io('http://localhost:3000');

const messageForm = document.getElementById('send-container')

socket.on('chat-message', data => {
  console.log(data);
})

messageForm.addEventListener('sumbit', e => {
  e.preventDefault()
  const message = messageInput.value()
  socket.emit('send-chat-message', message)
  messageInput.value = ''
})

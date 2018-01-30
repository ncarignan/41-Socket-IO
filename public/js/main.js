console.log('working main.js');

const socket = io();

console.log('ID: ', socket.id);


let sendMessageForm = document.getElementById('send-message-form');
let messageInput = document.getElementById('message-input');
let messagesContainer = document.getElementById('messages');

let setUsernameForm = document.getElementById('set-username-form');
let usernameInput = document.getElementById('username-input');

sendMessageForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let message = messageInput.value;
  socket.emit('send-message', {message});
});

setUsernameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = usernameInput.value;
  socket.emit('submit-username', {username});
});

socket.on('receive-message', (data) => {
  console.log('RECEIVED: ', data);
  let div = document.createElement('div');
  div.textContent = `${data.username} || ${data.message}`;

  messagesContainer.appendChild(div);

});

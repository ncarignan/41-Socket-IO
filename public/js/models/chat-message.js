'use strict';

class ChatMessage{
  constructor(message){
    this.username = message.username;
    this.timestamp = message.timestamp;
    this.message = message.message;
  }

  render(parentElement) {
    let container = document.createElement('div');
    let username = document.createElement('span');
    let timestamp = document.createElement('span');
    let message = document.createElement('span');

    container.classList.add('message');
    username.classList.add('username');
    timestamp.classList.add('timestamp');

    timestamp.textContent = this.timestamp;
    message.textContent = this.message;
    username.textContent = this.username;

    container.appendChild(username);
    container.appendChild(timestamp);
    container.appendChild(message);

    parentElement.appendChild(container);
  }
}

'use strict'
var LCD = require('lcdi2c');
var lcd = new LCD( 1, 0X27, 16, 2 );

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket
    this.request = request
  }
 onMessage (message){
 this.socket.broadcastToAll('message', message)
 this.mostrar(message)
}
mostrar(message){
lcd.clear();
lcd.print( message );
}

}

module.exports = ChatController

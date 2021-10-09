const EventEmitter = require('events');

//const emitter = new EventEmitter();

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
        this.emit('User logged', data);
        }, 2000);
    }
}

const users = new Users();

// once pega apenas um users 
// on pega todos os users
users.on('User logged', data => {
    console.log(data);
});

users.userLogged({ user: 'Celos Henrique'});
users.userLogged({ user: 'Vicente Rodrigues'});

//emitter.on('User logged', data => {
//    console.log(data);
//});

//emitter.emit('User logged', { user: 'Celso Henrique'});

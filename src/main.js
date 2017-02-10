//ES5
function User(name, email) {
    this.name = name;
    this.email = email;
}

User.prototype.rename = function (name) {
    this.name = name;
}

User.prototype.changeEmail = function (email) {
    this.email = email;
}

var user = new User('Ivan', 'test@gmail.com');
user.rename('Alex');

console.dir(user);

//ES6
class UserES6 {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    static register(...args) {
        return new User(...args);
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    rename(name) {
        this.name = name;
    }

    get foo() {
        return 'foo';
    }
}

var userES6 = new UserES6('Ivan', 'test@gmail.com');
userES6.rename('Alex');

console.dir(userES6);

//class static method example
console.dir(UserES6.register('Ivan', 'test@gmail.com'));

//getter example
console.log(userES6.foo);

//class is first-class citizen
function log(strategy) {
    strategy.handle();
}

class ConsoleLogger{
    handle() {
        console.log('Using the ConsoleLogger to log');
    }
}

log(new class {
    handle() {
        alert('Using the alert strategy to log');
    }
});

log(new ConsoleLogger);
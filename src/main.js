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

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    rename(name) {
        this.name = name;
    }
}

var userES6 = new UserES6('Ivan', 'test@gmail.com');
userES6.rename('Alex');

console.dir(userES6);
//ES5
function greetES5(person) {
    var name = person.name;
    var age = person.age;
    console.log('Hello, ' + name + ' you are ' + age);
}

greetES5({name: 'Ivan', age: 23});

//ES5
function greetES6({name, age}) {
    console.log(`Hello, ${name} you are ${age}`);
}

greetES6({name: 'Ivan', age: 23});



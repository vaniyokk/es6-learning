function fire(bool) {

    if(bool) {
        let foo = "bar";
        console.log(foo);
    } else {
        console.log(foo);
    }

}

fire(true);

const names = ["James", "Jeff"];

names = ["Susan", "Ann"];

console.log(names);
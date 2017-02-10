//old way
function sumES5(numbers) {
    return numbers.reduce(function(prev, curr) { 
        return prev + curr 
    });
}
console.log(sumES5( [1, 2, 3] ));

//ES6 rest operator
function sumES6(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr);
}
console.log(sumES6(1, 2, 3));

//ES6 spread operator
function sumSpread(x, y, z) {
    return x + y + z;
}
let nums = [1, 2, 3];

console.log(sumSpread(...nums));

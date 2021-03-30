function getSum(a){
    return function(b){
        return a + b;
    }
}

let num1 = 4;
let num2 = 5;
const resultFunc = getSum(num1);
console.log(resultFunc(num2));
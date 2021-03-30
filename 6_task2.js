function isPrime(n){
    if(n < 1000){
        if (n === 0) {
            return "Число простое";
        }
        for(let i = 2; i <= Math.sqrt(n); i++){
            if(n % i === 0){
                return "Число не простое";
            }
        }
        return "Число простое";
    }
    else {
        return "Данные неверны";
    }
}

let num = 245;
console.log(isPrime(num));
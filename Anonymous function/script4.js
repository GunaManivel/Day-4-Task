// 1.d return all the prime numbers in an array using anonymous function 


const num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,9 , 10]
const prime = function(arr) {
    const isPrime = num => {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    };
  
    return arr.filter(isPrime);
  }
  console.log(prime(num))
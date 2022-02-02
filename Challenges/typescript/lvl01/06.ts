// Factorial
// https://en.wikipedia.org/wiki/Factorial

function factorial(n: number):number {
    
    let m = n;
    let result = 1;
    for(let i = 0; i < n; i++){
    result *= m - i;
    
    }
    console.log(result);
    return result;
  }

  factorial(4);
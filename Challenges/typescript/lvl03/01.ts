// Product of consecutive Fib numbers
type IReturn = number | boolean;

const productFib = (prod: number):IReturn[] => {
   
    let n:number = 2;
    let found = true;

    let fib:number[] = [];
    fib[0] = 0;
    fib[1] = 1;

    let result:number = 0;
    while(found){
        fib[n] = fib[n - 2]+fib[n-1];
        if(fib[n] > prod){
            found= false;
        }

        n++
    }

    const resultA:IReturn[] = [];

    for(let i = 0; i < fib.length; i++){
        const num = fib[i] * fib[i + 1];
    
        if(num === prod){
            resultA.push(fib[i]);
            resultA.push(fib[i + 1]);
            resultA.push(true);
            break;
        }
        if(num > prod){
            resultA.push(fib[i]);
            resultA.push(fib[i+1]);
            resultA.push(false);
            break;
         
        }
    }

    return resultA;
  }

 productFib(5895);

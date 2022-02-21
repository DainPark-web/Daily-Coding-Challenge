//Wwice linear

function dblLinear(n: number): number {

    //make U
    // console.log(Math.sqrt(n))
    let u:number[] = [1];
    const p = Math.pow(n, 2);

    for(let i = 0; i < p; i++){
        const y = (u[i] * 2) + 1;
        const z = (u[i] * 3) + 1;
        
        if(y > u[i]){
            u.push(y);
        }
        if(z > u[i]){
            
            u.push(z);
        }

        // if(i === n){
        //     break;
        // }
        
        // console.log(u)
    }
    
    u = u.sort((a, b) => a - b);
    let result:number[] = Array.from(new Set(u))
    // result = result.sort((a, b) => a - b);

    console.log(result);
    //find durch Index U
    return result[n];
}

console.log(dblLinear(100));



// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// assert.strictEqual(dblLinear(10), 22);
// assert.strictEqual(dblLinear(20), 57);
// assert.strictEqual(dblLinear(30), 91);
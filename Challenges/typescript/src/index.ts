//Wwice linear

function dblLinear(n: number): number {

    //make U
    let u:number[] = [1];
    for(let i = 0; i < n; i++){
        const y = (u[i] * 2) + 1;
        const z = (u[i] * 3) + 1;
        u.push(y);
        u.push(z);

        u = u.sort((a, b) => a-b);
    }
    
    const result:number[] = Array.from(new Set(u))
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
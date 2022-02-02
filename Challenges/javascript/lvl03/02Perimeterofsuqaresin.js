function perimeter(n) {
    // array
    const newArray = [];

    let prev = 0;
    let curr = 1;
    let next = 0;
    for(let i = 0; i < n + 1; i++){
        next = prev + curr;

        if(i === 1){
            next = 1;
        }
        newArray.push(next);


        prev = curr;
        curr = next;

        
    }
   
    const sum = newArray.reduce((a, b) => a+ b, 0);
 
    return sum * 4;
}


perimeter(5)

//(1 + 1 + 2 + 3 + 5 + 8)

// perimeter(5)  should return 80
// perimeter(7)  should return 216
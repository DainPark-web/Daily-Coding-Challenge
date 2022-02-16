// Pyramid Array

function pyramid(n: number) {
    
    const resultArray:any[] = [];
    const itemArray:number[] = [];
    for(let i = 0; i < n; i++){
        itemArray.push(1);
        resultArray.push([...itemArray]);
        
    }
    console.log(resultArray);
  }

  pyramid(4);


//return
//   pyramid(0) => [ ]
//   pyramid(1) => [ [1] ]
//   pyramid(2) => [ [1], [1, 1] ]
//   pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
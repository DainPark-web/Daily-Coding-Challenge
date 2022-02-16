// Pyramid Array

function pyramid(n: number) {
    
    const resultArray:any[] = [];
    const itemArray:number[] = [];
    for(let i = 0; i < n; i++){
        itemArray.push(1);
        resultArray.push([...itemArray]);
        
    }
    return resultArray;
  }

  pyramid(4);

// better than my code
// export function pyramid(n: number) {
//     const ret = [];
//     for (let i = 0; i < n; i++) {
//       ret.push(Array(i + 1).fill(1));
//     }
//     return ret;
//   }


//return
//   pyramid(0) => [ ]
//   pyramid(1) => [ [1] ]
//   pyramid(2) => [ [1], [1, 1] ]
//   pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
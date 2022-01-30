function findOutlier(integers){
   const evenA = integers.filter((item) => Math.abs(item % 2) === 0 );
   const oddA = integers.filter((item) => Math.abs(item % 2) === 1 );
   
   if(evenA.length < oddA.length){
       return Number(evenA.join(""))
   }
   if(oddA.length < evenA.length){
       return Number(oddA.join(""));
   }
   if(evenA.length === oddA.length){
       return null;
   }
  
  }

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
//   [2, 4, 0, 100, 4, 11, 2602, 36]
//   Should return: 11 (the only odd number)
  
//   [160, 3, 1719, 19, 11, 13, -21]
//   Should return: 160 (the only even number)
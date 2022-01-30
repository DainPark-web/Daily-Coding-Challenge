function findOutlier(integers){
   const evenA = integers.filter((item) => item % 2 === 0 );
   const oddA = integers.filter((item) => item % 2 === 1 );
   
   if(evenA.length === 1){
       return Number(evenA.join(""))
   }
   if(oddA.length === 1){
       return Number(oddA.join(""));
   }
  
  }


//   [2, 4, 0, 100, 4, 11, 2602, 36]
//   Should return: 11 (the only odd number)
  
//   [160, 3, 1719, 19, 11, 13, -21]
//   Should return: 160 (the only even number)
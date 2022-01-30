function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
    let count= 0;
    arrayOfSheep.forEach((e) => {
      e === true ? count++ : null;
    })
   
    return count;
    
  }
  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];  
  countSheeps(array1)
function findOdd(A) {

    const newA = A;
    const dupA= {}

    newA.forEach((x) => {
        dupA[x] = (dupA[x] || 0) + 1;
    });
   
    const findOdd = Object.keys(dupA).filter((item) => dupA[item] % 2 !== 0);

    const result = Number(findOdd);
    return result;
  }


//   [7] should return 7, because it occurs 1 time (which is odd).
//   [0] should return 0, because it occurs 1 time (which is odd).
//   [1,1,2] should return 2, because it occurs 1 time (which is odd).
//   [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//   [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
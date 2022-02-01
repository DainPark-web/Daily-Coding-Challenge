function sortArray(array) {
    // 현재 위치에서 odd 들의 위치만 서로 바꾼다.
   
    const currArray = array;
    

    const findOdd = currArray.filter((item) => Math.abs(item % 2) === 1).sort((a,b) => a-b);

    //odd를 찾으면 그 위치에 sorting이 끝난 oddarray에서 앞에서 부터 꺼내 넣어준다. 
    const resultArray = currArray.map((item) => Math.abs(item % 2) ? findOdd.shift() : item);
    
    return resultArray;
  }

  sortArray([5, 3, 2, 8, 1, 4])


// ex
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
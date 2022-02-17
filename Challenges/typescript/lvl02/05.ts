function multiplicationTable (size: number): number[][] {
    const mainArray: number[][] = [];
    let itemArray: number[] = [];
    for(let i = 0; i < size; i++){
        for(let j = 1; j < size + 1; j++){
            const n = (i + 1) * j;
            itemArray.push(n);
        }
        mainArray.push([...itemArray])
        itemArray.splice(0, itemArray.length)
    }
  
    return mainArray;
  }
multiplicationTable(2);
// multiplicationTable(1), [[1]])
// mdeepStrictEqual(multiplicationTable(2), [[1, 2], [2, 4]])
// mdeepStrictEqual(multiplicationTable(3), [[1, 2, 3], [2, 4, 6], [3, 6, 9]])
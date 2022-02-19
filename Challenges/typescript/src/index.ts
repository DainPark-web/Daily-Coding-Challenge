// Find the unique string

function findUniq(arr: string[]): string {
  const uniqueA = arr.map((e) => e.split("").sort().join(""));
  // const uniqueA = arr.map((e) => e.split("")).map((e) => Array.from(new Set(e)).sort()).map((e) => e.join(""));
  const uniqueFind = Array.from(new Set(uniqueA));

  console.log( uniqueA);
  // console.log( uniqueFind);

  let result:any = [];
  for(let i =0; i < uniqueFind.length; i++){
    const f = uniqueA.filter((e) => {
      return e === uniqueFind[i];
    });
    
    if(f.length < 2){
      result.push(...f);
    }
  }
  console.log(result);
  return result;
}

findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]);

export {};
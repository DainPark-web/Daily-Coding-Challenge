// Find the unique string

function findUniq(arr: string[]): string {
  // const uniqueA = arr.map((e) => e.split("").sort().join(""));
  const orA = arr;
  const uniqueA = arr.map((e) => e.split("")).map((e) => Array.from(new Set(e)).sort()).map((e) => e.join(""));
  const uniqueFind = Array.from(new Set(uniqueA));

  console.log( uniqueA);
  console.log( uniqueFind);

  let result:any = [];
  for(let i =0; i < uniqueFind.length; i++){
    const f = uniqueA.filter((e) => {
      return e === uniqueFind[i];
    });
    
    if(f.length < 2){
      console.log(f[0])
      const findIndex = uniqueA.indexOf(f[0])
      console.log(orA[findIndex]);
      
      result.push(orA[findIndex]);
    }
  }
  console.log(result.join(""));
  return result.join("");
}

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BBbb', 'Aaaa', 'AAAaaa', 'a' ]);

export {};
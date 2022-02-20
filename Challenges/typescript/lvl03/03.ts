// Find the unique string

function findUniq(arr: string[]): string {
 
    const orA = arr;
    let uniqueA = arr.map((e) => Array.from(new Set(e.toUpperCase().split("").sort())).join(""));
    const uniqueFind = Array.from(new Set(uniqueA));
  
    let result:any = [];
    for(let i =0; i < uniqueFind.length; i++){
      const f = uniqueA.filter((e) => {
        return e === uniqueFind[i];
      });
      
      if(f.length < 2){
        // console.log(f[0])
        const findIndex = uniqueA.indexOf(f[0])
        // console.log(orA[findIndex]);
        
        result.push(orA[findIndex]);
      }
    }
    return result.join("");
  }
  
  // findUniq([ 'Aa', 'aaa', 'aaaaa', 'BBbb', 'Aaaa', 'AAAaaa', 'a' ]);
  //return BBbb
  // findUniq(['Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter']);
  //return harry potter
  
  export {};
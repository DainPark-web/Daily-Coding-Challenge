// What doesn't belong to these?

function findTheNotFittingElement(series:any[]):any
{
  const seriesA = series;
  const types = series.map(e => typeof e);
  const findTypes = Array.from(new Set(types));
//   console.log(findTypes);

  const st = seriesA.filter((e) => typeof e === findTypes[0]);
  const notSt = seriesA.filter((e) => typeof e === findTypes[1]);

  //check Type
  if(st.length !== 0 && notSt.length !==0){
      if(st.length === 1){
          return st[0];
      }else{
          return notSt[0];
      }
  }else{
      const f = seriesA.filter((e,i) => seriesA.indexOf(e) !== i);
      const nf = seriesA.filter((e,i) => seriesA.indexOf(e) === i);

      if(nf.length == 2){
        const fnf = nf.filter((e) => e !== f[0])
        // console.log(fnf);
  
        return fnf[0];
      }else{
        if(typeof nf[0] === "string"){
            
            const newNf:any[] = [...nf];
            const fn:any[] = newNf.filter((e) => Number(e));
            if(fn.length !== 0){
                return Number(fn[0]);
            }

            const le = nf.filter((e) => e.toUpperCase() === e);
            const notLe = nf.filter((e) => e.toUpperCase() !== e);
            // console.log(le);
            if(notLe.length === 1){
                // console.log(notLe)
                return notLe[0]
            }else{
                const notLLe = le.filter((e) => e.toLowerCase() === e);
                if(notLLe.length === 1){
                    return notLLe[0];
                }
                return le[0]
            }
           
        }else{
            const odd = nf.filter((e) => e % 2 === 1);
            const even = nf.filter((e) => e % 2 === 0);
            console.log(odd)
            console.log(even);
            if(odd.length === 1){
                return odd[0]
            }else if(even.length === 1){
                return even[0]
            }else{
                const newNN = nf.sort((a,b) => a -b);
                return newNN[0]
            }
            
        }
      }
    
  }


  return null;
}

console.log(findTheNotFittingElement([ 2, 2, -2, 6, 10 ]));
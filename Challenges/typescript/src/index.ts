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
            console.log(Number(nf[2]))
            
            const le = nf.filter((e) => e.toUpperCase() === e);
            const notLe = nf.filter((e) => e.toUpperCase() !== e);
            console.log(le);
            if(le.length > notLe.length){
                console.log(notLe)
                return notLe[0]
            }else{

                return le[0]
            }
           
        }else{
            const fn = nf.sort((a,b) => a - b);
            // console.log(fn);
            return fn[0];
        }
      }
    
  }


  return null;
}

console.log(findTheNotFittingElement([ 'Z', 'L', '3', 't', 'G' ]));
function maxMultiple(divisor: number, bound: number): number {
   
    let newArray:number[] = [];
    for(let i = divisor; i <= bound; i++){
        newArray.push(i);
    }
   

    const result:number | undefined = newArray.reverse().find((e: any) => {
        if(e % divisor === 0){
            if(e <= bound){
                return e;
            }  
        }
    });
    
    if(typeof result === "number"){
        return result;
    }else{
        return -1;
    }
  }
  

maxMultiple(37, 200)
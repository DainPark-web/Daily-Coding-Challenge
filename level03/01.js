var uniqueInOrder=function(iterable){
  
    let data = iterable;
   
    let newData = "";
    if(typeof data === "string"){

      newData = data.split("");
    }else{
      newData = data;
    }
    
    let pre = "";
    const result = newData.filter((a) => {
        if(a === pre){
            return ;
        }else{
            pre = a;
            return a;
        }
    })
    console.log(result);
    return result;
  }
uniqueInOrder([1,2,2,3,3]);

//result
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]
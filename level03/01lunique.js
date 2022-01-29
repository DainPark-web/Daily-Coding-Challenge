var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    const data = iterable;
    if(typeof data !== "string"){
        data.join("");
    }

    console.log(typeof data)
    const d = data.split("");
    let pre = "";
    const a = d.filter((a) => {
        if(a === pre){
            return ;
        }else{
            pre = a;
            return a;
        }
    })
    console.log(a)
  }


uniqueInOrder([1,2,2,3,3]);
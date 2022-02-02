function capitalize(s: string):string[] {
    
    const result:Array<string> = [];
    const even:string[] = [];
    const odd:string[] = [];
    s.split("").forEach((item,index) => {
        if(index === 0 || index % 2 === 0){
            even.push(item.toUpperCase());
            odd.push(item);
        }else{
            even.push(item);
            odd.push(item.toUpperCase());
        }
    });
    result.push(even.join(""));
    result.push(odd.join(""));

    
    return result;
  }



  capitalize("abcdef");
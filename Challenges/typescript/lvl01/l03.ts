function isIsogram(str: string): boolean{
    //...
    const strA = str.toUpperCase().split("");
    const newA = strA.filter((v, i) => strA.indexOf(v) !== i);
    
    return newA.length > 0 ? false : true;
 }


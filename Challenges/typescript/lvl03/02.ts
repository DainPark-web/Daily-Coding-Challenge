// Is my friend cheating?

function removeNb (n: number):string {
    let a:number[] = [];

    for(let i = 0; i <= n; i++){
        a.push(i);
    }
    const total = a.reduce((a,b) => a+b,0);

    

    return "";
}

removeNb(26);
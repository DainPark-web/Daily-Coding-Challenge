// if i++ === 0,1,2,3,4,5,6,7,8,9, return 0,1,2,3,4,5,6,7,8,9
// if i++ === 11,12,13,14,16,17,18,19 return 0,1,2,3,4,5,6,7,8,9
// ...


const dainCal = (e:number):number => {
    const num = e;

    console.log(e % 10);
    return e % 10;
}


dainCal(1);
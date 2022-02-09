// return 0~9 = 1
// return 10 ~ 19 = 2
// return 20 ~ 19 = 3
// ...

const dainM03 = (e:number):number => {
    const num:number = e + 1;
    // console.log(e%10);
    console.log(Math.ceil(num/10));
    return 0;
}

dainM03(30);
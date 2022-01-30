function squareDigits(num){
    const newNum = num.toString().split("");
    const result = newNum.map((value) => Math.pow(value, 2)).join("");
    return Number(result);
}
//result
// squareDigits(9119) == 811181;

// function checkExam(array1: string[], array2: string[]): number {
//   // good luck 
//    const arrayA = array1;
//    const arrayB = array2;
//    let newArray:number[] = [];
//    arrayA.forEach((data) => {
//      const f = arrayB.indexOf(data);
//      if(f !== -1){
//        newArray.push(4);
//        arrayB.splice(f, 1);
//      }
//    });
//    arrayB.forEach((data) => {
//     if(data === ""){
//       newArray.push(0);
//     }else{
//       newArray.push(-1);
//     }
//    });
//    console.log(newArray);
//    console.log(newArray.reduce((a, b) => a+b, 0));
//    return newArray.reduce((a, b) => a+b, 0);
//  }
function checkExam(array1, array2) {
    // good luck 
    var newArray = array1.map(function (data, index) {
        if (data === array2[index]) {
            return 4;
        }
        else if (data === "" || array2[index] === "") {
            return Number(0);
        }
        else {
            return -1;
        }
    });
    console.log(newArray);
    return newArray.reduce(function (a, b) { return a + b; }, 0);
}
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]);

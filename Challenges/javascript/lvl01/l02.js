function highAndLow(numbers){
    const numArray = numbers.split(" ");
    const min = numArray.sort((a, b) => a -b)[0];
    const max = numArray.sort((a, b) => b -a)[0];
    return `${max} ${min}`
  }
  
  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
  //result => 42 -9


  //d
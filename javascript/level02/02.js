function duplicateCount(text){
    const newText = text.toUpperCase().split("");
    console.log(newText.indexOf("I"));

    const findDu = newText.filter((v, i) => newText.indexOf(v) !== i);
    const newArray = [...new Set(findDu)];
   
    const result = newArray.length;
    return result;
  }

  //result
//   "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
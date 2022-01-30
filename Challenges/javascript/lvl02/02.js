
//⭐️ method1
function duplicateCount(text){
    const newText = text.toUpperCase().split("");


    const findDu = newText.filter((v, i) => newText.indexOf(v) !== i);
    const newArray = [...new Set(findDu)];
   
    const result = newArray.length;
    return result;
  }


//⭐️ method2
function duplicateCount(text){
    const newText = text.toUpperCase().split("");
   
    const uniqueText = new Set(newText);
    
    const filterE = newText.filter((item) => {
        if(uniqueText.has(item)){
            uniqueText.delete(item);
        }else{
            return item;
        }
    });

    const filterR = [...new Set(filterE)];
    const result = filterR.length;
    return result;
  }



  duplicateCount("aaabbcde")
//result
//   "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
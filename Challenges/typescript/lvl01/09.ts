function removeDuplicateWords(s: string): string {
    const changeToA = s.split(" ");

    // const dup = changeToA.filter((e, index)=> changeToA.indexOf(e) !== index);

    const newS = Array.from(new Set(changeToA));

    

    console.log(newS);    
    return ""; // your perfect code...
  }


  removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
function removeDuplicateWords(s: string): string {
    const changeToA = s.split(" ");
    const newS = Array.from(new Set(changeToA));
    return newS.join(" "); 
  }


  removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
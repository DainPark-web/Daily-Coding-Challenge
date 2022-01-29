function reverseWords(str) {
    // Go for it
    let a = str.split(" ").map((e) => {
    return e.split("").reverse("").join("")
  
  }).join(" ")
    
    return a;
  }
console.log(reverseWords("dainpark is a developer"))
//result => krapniad si a repoleved



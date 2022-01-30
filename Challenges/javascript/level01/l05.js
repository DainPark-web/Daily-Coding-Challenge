function removeChar(str){
     const result = str.split("");
     result.pop();
     result.shift();
     return result.join("")
   };

//    It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
// removeChar("eloquent")
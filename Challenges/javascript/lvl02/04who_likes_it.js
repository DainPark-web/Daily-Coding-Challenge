function likes(names) {
    const people = names;
    const peopleLength = people.length;
    if(peopleLength === 0){
        return "no one likes this";
    }else if(peopleLength === 1){
        return `${people[0]} likes this`
    }else if(peopleLength === 2){
        return `${people[0]} and ${people[1]} like this`
    }else if(peopleLength === 3){
        return `${people[0]}, ${people[1]} and ${people[2]} like this`
    }else{
        
        return `${people.splice(0, 1)}, ${people.splice(0, 1)} and ${people.length} others like this`
    }
  }

//   []                                -->  "no one likes this"
//   ["Peter"]                         -->  "Peter likes this"
//   ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//   ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//   ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
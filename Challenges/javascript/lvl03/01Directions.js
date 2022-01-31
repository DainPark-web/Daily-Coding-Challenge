
// still there are errors (sorting array)
// And I need to improve this code. It looks so bad.
function dirReduc(arr){
    const dir = arr;
    let result = []

    dir.forEach((item, index) => {
     
      if(item === "NORTH"){
        const found = dir.indexOf("SOUTH");
        if(found !== -1){
          dir.splice(found, 1, null);
          dir.splice(index, 1, null);
        }
      }

      if(item === "SOUTH"){
        const found = dir.indexOf("NORTH");
        if(found !== -1){
          dir.splice(found, 1, null);
          dir.splice(index, 1, null);
        }
      }
      if(item === "EAST"){
        const found = dir.indexOf("WEST");
        if(found !== -1){
          dir.splice(found, 1, null);
          dir.splice(index, 1, null);
        }
      }
      if(item === "WEST"){
        const found = dir.indexOf("EAST");
        if(found !== -1){
          dir.splice(found, 1, null);
          dir.splice(index, 1, null);
        }
      }


      result = dir.filter((item) => {
        if(item !== null){
          return item;
        }
      })

    })
    
   
  }


dirReduc([ "EAST", "WEST", "EAST", "WEST", "EAST"]);
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]
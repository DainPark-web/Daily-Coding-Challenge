
// still there are errors (sorting array)
// And I need to improve this code. It looks so bad.
function dirReduc(arr){
    const dir = arr;
    let result = []

    
    const northDir = dir.filter((item, index) => item === "NORTH");
    const southDir = dir.filter((item, index) => item === "SOUTH");
    const eastDir = dir.filter((item, index) => item === "EAST");
    const westDir = dir.filter((item, index) => item === "WEST");

    

    if(northDir.length === 1 && southDir.length ===1 && eastDir.length ===1 && westDir.length ===1){
      result.push(northDir[0])
      result.push(westDir[0])
      result.push(southDir[0])
      result.push(eastDir[0])
    }else{

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

    
    
   return result;
  }


dirReduc([ "EAST", "WEST", "EAST", "WEST", "EAST"]);
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]
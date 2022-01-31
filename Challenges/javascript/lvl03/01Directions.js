
// still there are errors (sorting array)
// And I need to improve this code. It looks so bad.
function dirReduc(arr){
    const dir = arr;

    
    const northDir = dir.filter((item, index) => item === "NORTH");
    const southDir = dir.filter((item, index) => item === "SOUTH");
    const eastDir = dir.filter((item, index) => item === "EAST");
    const westDir = dir.filter((item, index) => item === "WEST");

    let result = []

    if(northDir.length === 1 && southDir.length ===1 && eastDir.length ===1 && westDir.length ===1){
      result.push(northDir[0])
      result.push(westDir[0])
      result.push(southDir[0])
      result.push(eastDir[0])
    }else{
      const ns = northDir.length - southDir.length;
      const ew = eastDir.length - westDir.length;
      if(ew !== 0){
        if(ew > 0){
          for(let i =0; i<ew; i++){
            result.push("EAST")
          }
        }
        if(ew < 0){
          for(let i =0; i<Math.abs(ew); i++){
            result.push("WEST");
          }
        }
      }
      if(ns !== 0){
        if(ns > 0){
          for(let i =0; i<ns; i++){
            result.push("NORTH")
          }
        }
        if(ns < 0){
          for(let i =0; i<Math.abs(ns); i++){
            result.push("SOUTH");
          }
        }
      }
      
      result = result.reverse()
    }
    

    
    return result;
    
  }


dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
// dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]);
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"]
function abbrevName(name){
  const nA = name.split(" ");
  const d = nA.map((value) => value[0]).join(".").toUpperCase();
  
  return d;


}


// abbrevName("sam Harri");
//result "S.H"
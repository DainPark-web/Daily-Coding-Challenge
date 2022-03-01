// Ninety Nine Thousand Nine Hundred Ninety Nine


function numberToEnglish(x: number): string {

    //0 ~ 19
    const num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    //20 ~ 99
    const numB = ["twenty", "thirty", "fourty", "sixty","fifty", "seventy", "eighty", "ninety"];

    if(x <= 19){
        return num[x];
    }
    else if(x > 19 && x <= 99){
        const ft = Number(x.toString().split("")[0]);
        const fn = Number(x.toString().split("")[1]);
        // console.log(ft, fn);
        const result = `${numB[ft-2]} ${fn != 0 ? num[fn] : ""}`;
        // console.log(result)
        return result
    }
    else if(x > 99 && x < 1000){
        const ft = Number(x.toString().split("")[0]);
        //  여기서 부터 십의자리 수 찾기 
        const fn = Number(x.toString().split("").slice(1).join(""));

        if(fn < 20){
            return `${num[ft]} hundred ${fn !== 0 ? num[fn] : ""}`;
        }
        else{
            const fna = Number(fn.toString().split("")[0]);
  
            const fnb = Number(fn.toString().split("")[1]);
          
            const result = x % 100 === 0 ? `${num[ft]} hundred` : `${num[ft]} hundred ${numB[fna-2]} ${fnb != 0 ? num[fnb] : ""}`
            return result;
        }
    }
    else if(x > 1000 && x < 9999){
        const st = Number(x.toString().split("")[0]);
        const ftt = `${num[st]} thousand`;
        const checkN = Number(x.toString().split("").slice(1).join(""));
        
        if(checkN > 99 && checkN < 1000){
            const ft = Number(checkN.toString().split("")[0]);
            //  여기서 부터 십의자리 수 찾기 
            const fn = Number(checkN.toString().split("").slice(1).join(""));
    
            if(fn < 20){
               
                return `${ftt} ${num[ft]} hundred ${fn !== 0 ? num[fn] : ""}`;
            }
            else{
               
                const fna = Number(fn.toString().split("")[0]);
      
                const fnb = Number(fn.toString().split("")[1]);
                
                const result = checkN % 100 === 0 ? `${ftt} ${num[ft]} hundred` : `${ftt} ${num[ft]} hundred ${numB[fna-2]} ${fnb != 0 ? num[fnb] : ""}`
                return result;
            }
    }else{
        return "something wrong"
    }
}
    else{
        return "d"
    }
  
}

console.log(numberToEnglish(100));
//만자리 수 부터 다시 다루자
//fuck this code is so ugly
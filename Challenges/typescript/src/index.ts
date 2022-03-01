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
            return `${num[ft]} hundred ${num[fn]}`;
        }
        else{
            const fna = Number(fn.toString().split("")[0]);
  
            const fnb = Number(fn.toString().split("")[1]);
          
            const result = x % 100 === 0 ? `${num[ft]} hundred` : `${num[ft]} hundred ${numB[fna-2]} ${fnb != 0 ? num[fnb] : ""}`
            return result;
        }
    }
    else{
        return "d"
    }
  
}

console.log(numberToEnglish(922));
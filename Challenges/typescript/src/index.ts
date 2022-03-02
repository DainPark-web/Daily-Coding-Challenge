// Ninety Nine Thousand Nine Hundred Ninety Nine


function numberToEnglish(x: number): string {

    //0 ~ 19
    const num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    //20 ~ 99
    const numB = ["twenty", "thirty", "forty","fifty", "sixty", "seventy", "eighty", "ninety"];

    if(x <= 19){
        return num[x];
    }
    else if(x > 19 && x <= 99){
        const ft = Number(x.toString().split("")[0]);
        const fn = Number(x.toString().split("")[1]);
        // console.log(ft, fn);
        if(fn === 0){
            return `${numB[ft-2]}`;
        }
        const result = `${numB[ft-2]} ${fn != 0 ? num[fn] : ""}`;
        // console.log(result)
        return result
    }
    else if(x > 99 && x < 1000){
        const ft = Number(x.toString().split("")[0]);
        //  여기서 부터 십의자리 수 찾기 
        const fn = Number(x.toString().split("").slice(1).join(""));

        if(fn < 20){
            if(fn === 0){
                return `${num[ft]} hundred`
            }
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
        console.log(checkN);
        if(checkN !== 0){
            const ft = Number(checkN.toString().split("")[0]);
            //  여기서 부터 십의자리 수 찾기 
            const fn = Number(checkN.toString().split("").slice(1).join(""));
            console.log(checkN)
            console.log("dain")
            if(checkN < 20){
                
                return `${ftt} ${num[checkN]}`;
            }
            else{
               
                const fna = Number(fn.toString().split("")[0]);
      
                const fnb = Number(fn.toString().split("")[1]);
                
                const result = checkN % 100 === 0 ? `${ftt} ${num[ft]} hundred` : `${ftt} ${num[ft]} hundred ${numB[fna-2]} ${fnb != 0 ? num[fnb] : ""}`
                return result;
            }
    }else{
        return ftt
    }
}
    else{
        const total = x.toString().split("")
        const st = Number(total.splice(0, 2).join(""));
        const rest = Number(total.join(""));
        // console.log(rest);
        
        let thouResult:any = "";
        let hundResult:any =""
        //thousand
        if(st <= 19){
            thouResult = `${num[st]} thousand`;
        }
        else{
            const ft = Number(st.toString().split("")[0]);
            const fn = Number(st.toString().split("")[1]);
            // console.log(ft, fn);
            if(fn === 0){
                thouResult = `${numB[ft-2]} thousand`;
            }else{
                const result = `${numB[ft-2]} ${num[fn]}`;
            // console.log(result)
            thouResult= `${result} thousand`;
            }
            
        }

        //hundred
        if(rest !== 0){
            if(rest <= 19){
                hundResult = num[rest];
            }
            else if(rest > 19 && rest <= 99){
                
                const ft = Number(rest.toString().split("")[0]);
                const fn = Number(rest.toString().split("")[1]);
                // console.log(ft, fn);
                if(fn === 0){
                    hundResult = `${numB[ft-2]}`;
                }
                const result = `${numB[ft-2]} ${fn != 0 ? num[fn] : ""}`;
                // console.log(result)
                hundResult = result
            }else{
                const ft = Number(rest.toString().split("")[0]);
                //  여기서 부터 십의자리 수 찾기 
                const fn = Number(rest.toString().split("").slice(1).join(""));

                     if(fn < 20){
                     if(fn === 0){
                        hundResult = `${num[ft]} hundred`
                    }
                     hundResult = `${num[ft]} hundred ${fn !== 0 ? num[fn] : ""}`;
        }
        else{
            const fna = Number(fn.toString().split("")[0]);
  
            const fnb = Number(fn.toString().split("")[1]);
          
            const result = x % 100 === 0 ? `${num[ft]} hundred` : `${num[ft]} hundred ${numB[fna-2]} ${fnb != 0 ? num[fnb] : ""}`
            hundResult = result;
        }
            }
          
            return `${thouResult} ${hundResult}`
        }else{
         
            return `${thouResult}`
        }
        
        
        
    }
  
}

console.log(numberToEnglish(63111));

//better than me
// export function numberToEnglish(n: number): string {
//     if(n < 0 || n % 1 != 0) 
//       return ""
//     if (n < 20) 
//       return {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
//              10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
//               17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}[n]
//     if (n < 100) 
//       return ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'][(n / 10 | 0) - 2] + (n % 10 ? ' ' + numberToEnglish(n % 10) : '')
//     if (n < 1e3) 
//       return numberToEnglish((n / 100) | 0) + ' hundred' + (n % 100 ? ' ' + numberToEnglish(n % 100) : '')
//     if (n < 1e6) 
//       return numberToEnglish((n / 1e3) | 0) + ' thousand' + (n % 1e3 ? ' ' + numberToEnglish(n % 1e3) : '') 
//   }
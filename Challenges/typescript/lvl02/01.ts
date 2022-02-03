function decipherThis(str: string): string {
    
    const text = str.split(" ");
   
    const findNumb = text.map((e) => {
        const integer = parseInt(e, 10);
        return String.fromCharCode(integer);
    });

    const removeNum = text.map((e) => {
        return e.replace(/[0-9]/g, '');
    });

    const newArray = findNumb.map((e, index) => {
        const newSentence =  `${e}${removeNum[index]}`;
        const sArray = newSentence.split("");
        const second = sArray.splice(1, 1);
        const last = sArray.splice(sArray.length -1, 1);
        sArray.splice(1, 0, last.join(""));
        sArray.splice(sArray.length , 0, second.join(""));

        return sArray.join("");
    });


    return newArray.join(" "); 

  }

 
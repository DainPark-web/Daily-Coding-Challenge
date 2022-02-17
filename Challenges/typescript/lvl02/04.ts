function meeting(s: string): string {
    const newArray = s.split(";").map((e) => e.split(":"));

    newArray.map((e) => {
        // a.splice(y, 1, a.splice(x, 1, a[y])[0]);
        const n = e[0];
        e.splice(0, 1, e[1])[0];
        e.splice(1, 1, n);
        return e
    })

    newArray.sort();
    const result = newArray.join(" ").split(" ").map((e) => `(${e})`).join(" ");
   


    
    


    return result.toUpperCase();
}

meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn");
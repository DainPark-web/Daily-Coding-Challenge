function meeting(s) {
    var newArray = s.split(";").map(function (e) { return e.split(":"); });
    newArray.map(function (e) {
        // a.splice(y, 1, a.splice(x, 1, a[y])[0]);
        var n = e[0];
        e.splice(0, 1, e[1])[0];
        e.splice(1, 1, n);
        return e;
    });
    newArray.sort();
    var result = newArray.join(" ").split(" ").map(function (e) { return "(" + e + ")"; }).join(" ");
    return result.toUpperCase();
}
meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn");

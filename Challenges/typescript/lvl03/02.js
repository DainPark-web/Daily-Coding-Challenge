// Is my friend cheating?
function removeNb(n) {
    var a = [];
    for (var i = 0; i <= n; i++) {
        a.push(i);
    }
    var total = a.reduce(function (a, b) { return a + b; }, 0);
    return "";
}
removeNb(26);

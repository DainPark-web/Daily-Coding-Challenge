var productFib = function (prod) {
    var n = 2;
    var found = true;
    var fib = [];
    fib[0] = 0;
    fib[1] = 1;
    var result = 0;
    while (found) {
        fib[n] = fib[n - 2] + fib[n - 1];
        if (fib[n] > prod) {
            found = false;
        }
        n++;
    }
    var resultA = [];
    for (var i = 0; i < fib.length; i++) {
        var num = fib[i] * fib[i + 1];
        if (num === prod) {
            resultA.push(fib[i]);
            resultA.push(fib[i + 1]);
            resultA.push(true);
            break;
        }
        if (num > prod) {
            resultA.push(fib[i]);
            resultA.push(fib[i + 1]);
            resultA.push(false);
            break;
        }
    }
    return resultA;
};
productFib(5895);

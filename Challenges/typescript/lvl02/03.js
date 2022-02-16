// Pyramid Array
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function pyramid(n) {
    var resultArray = [];
    var itemArray = [];
    for (var i = 0; i < n; i++) {
        itemArray.push(1);
        resultArray.push(__spreadArray([], itemArray));
    }
    console.log(resultArray);
}
pyramid(4);
//return
//   pyramid(0) => [ ]
//   pyramid(1) => [ [1] ]
//   pyramid(2) => [ [1], [1, 1] ]
//   pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]

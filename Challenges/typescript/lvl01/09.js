function removeDuplicateWords(s) {
    var changeToA = s.split(" ");
    var newS = Array.from(new Set(changeToA));
    return newS.join(" ");
}
removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');

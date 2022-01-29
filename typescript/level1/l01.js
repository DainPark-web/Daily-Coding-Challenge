function past(h, m, s) {
    var ms = s * 1000;
    var mm = m * 60 * 1000;
    var hm = h * 60 * 60 * 1000;
    var result = ms + mm + hm;
    return result;
}

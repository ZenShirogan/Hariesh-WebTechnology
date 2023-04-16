 exports.sub = function (num1, num2) {
    return num1 - num2;
};

exports.add = function (num1, num2) {
    var result = Number(num1)+Number(num2);
    return result;
};

exports.mult = function (num1, num2) {
    return num1 * num2;
};
 
exports.div = function (num1, num2) {
    return num1 / num2;
};

exports.mod = function (num1, num2) {
    return num1 % num2;
};

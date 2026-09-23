const sumAll = function (a, b) {
    if (a < 0 || b < 0 || a % 1 !== 0 || b % 1 !== 0 || typeof (a) !== "number" || typeof (b) !== "number") return "ERROR";
    let bigger = a < b ? b : a;
    let smaller = a > b ? b : a;
    let result = 0;
    for (let i = smaller; i <= bigger; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

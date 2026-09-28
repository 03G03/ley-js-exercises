const leapYears = function (year) {
    let by4 = year % 4;
    let by100 = year % 100;
    let by400 = year % 400;
    if (by400 == 0) {
        return true;
    } else if (by4 == 0) {
        if (by100 == 0) return false;
        return true;
    } else if (by4 !== 0) {
        if (by100 == 0) return true;
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

const repeatString = function (string, num) {
    if (num > 0) {
        let result = "";
        for (let i = 1; i <= num; i++) {
            result += string;
        }
        return result;
    } else if (num < 0) {
        return "ERROR";
    } else if (num == 0) {
        return "";
    }
};

// Do not edit below this line
module.exports = repeatString;

const reverseString = function (string) {
    const arr = string.split("");
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;

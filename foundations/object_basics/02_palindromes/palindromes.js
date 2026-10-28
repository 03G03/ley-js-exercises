const palindromes = function (string) {
    const reversedString = string.split("").reverse().join("");
    return string === reversedString ? true: false;
};

// Do not edit below this line
module.exports = palindromes;

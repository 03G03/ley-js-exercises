const palindromes = function (string) {
    const ogString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedString = ogString.split("").reverse().join("");
    return ogString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

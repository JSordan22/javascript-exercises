const palindromes = function (str) {
    let modStr = str.toLowerCase().split("");
    let badElements = [",", " ", "!", "?", "."]
    let cleanStr = modStr.filter((ltr) => badElements.indexOf(ltr) < 0);
    
    return cleanStr.join("") == cleanStr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;

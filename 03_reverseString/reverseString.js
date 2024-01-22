const reverseString = function(str) {
    let reverseStr = "";
    
    for(let index = str.length - 1; index >= 0; index--) {
        reverseStr += str.substring(index, index + 1);
    }

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;

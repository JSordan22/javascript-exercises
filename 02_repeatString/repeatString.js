const repeatString = function(str, num) {
    let outcome = "";
    
    for(let count = 0; count < num; count++) {
        outcome += str;
    }

    if(num < 0) {
        return "ERROR";
    }
    return outcome;
};

// Do not edit below this line
module.exports = repeatString;

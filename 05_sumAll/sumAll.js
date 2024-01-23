const sumAll = function(int1, int2) {
    let sum = 0;

    for(let i = Math.min(int1, int2); i <= Math.max(int1, int2); i++) {
        sum += i;
    }
    
    if(!(int1 >= 0) || !(int2 >= 0) &&
       !(typeof int1 === "number") || !(typeof int2 === "number")) {
        return "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

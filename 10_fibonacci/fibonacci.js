const fibonacci = function(pos) {
    if(pos == 0) {
        return 0;
    }
    else if(pos == 1) {
        return 1;
    }
    else if(pos < 0) {
        return "OOPS";
    }
    return fibonacci(pos - 2) + fibonacci(pos - 1);
};

// Do not edit below this line
module.exports = fibonacci;

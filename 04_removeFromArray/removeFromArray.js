const removeFromArray = function(arr) {//splice and nested for loop
    for(let count = 1; count < arguments.length; count++) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === arguments[count]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

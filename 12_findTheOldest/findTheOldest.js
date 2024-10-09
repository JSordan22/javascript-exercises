const findTheOldest = function(arr) {
    const date = new Date();
    let max = arr[0];
    let maxAge = max.yearOfDeath == undefined ? date.getFullYear() - max.yearOfBirth : max.yearOfDeath - max.yearOfBirth;
    
    for (let i = 0; i < arr.length; i++) {
        if(max.yearOfDeath == undefined) {
            if(maxAge < arr[i].yearOfDeath - arr[i].yearOfBirth) {
                max = arr[i];
                maxAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
            }
        } else if(arr[i].yearOfDeath == undefined) {
            if(maxAge < date.getFullYear() - arr[i].yearOfBirth) {
                max = arr[i];
                maxAge = date.getFullYear() - arr[i].yearOfBirth;
            }
        } else {
            if(maxAge < arr[i].yearOfDeath - arr[i].yearOfBirth) {
                max = arr[i];
                maxAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
            }
        }
    }
    return max;
};

// Do not edit below this line
module.exports = findTheOldest;

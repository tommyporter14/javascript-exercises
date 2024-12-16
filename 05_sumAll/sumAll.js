const sumAll = function(num1, num2) {
    let first;
    let second;
    let result = 0;
    if (num1 < 0 || num2 < 0 || !(typeof num1 === 'number') || !(typeof num2 === 'number')
        || !(Number.isInteger(num1)) || !(Number.isInteger(num2))){
        result = "ERROR";
    }
    else if(num1 < num2){
        first = num1;
        second = num2;
    } else {
        first = num2;
        second = num1;
    }
    for (let i = first; i <= second; i++){
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;

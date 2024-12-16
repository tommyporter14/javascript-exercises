const repeatString = function(word, num) {
    let result = "";
    if (num < 0){
        result ="ERROR";
    }
    for(i = 0; i < num; i++ ){
            result = result + word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;

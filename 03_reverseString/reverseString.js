const reverseString = function(word) {
    const myArray = [];
    for ( i = word.length; i >= 0; i--) {
        myArray.push(word.charAt(i));
    }
    return myArray.join("");
};

// Do not edit below this line
module.exports = reverseString;

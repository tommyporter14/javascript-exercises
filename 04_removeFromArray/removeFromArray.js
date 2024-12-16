const removeFromArray = function(collection, ...remove) {
      const newArray = collection.filter(item => !remove.includes(item));
      return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

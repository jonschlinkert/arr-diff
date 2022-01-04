'use strict';

function performArrayDiff(arrayOne, arrayTwo) {
  /* yes we need to make sure that the second argument in this is always an array */
  if (!Array.isArray(arrayTwo)) {
    return arrayOne.slice(0);
  }
  else {
    /* take a clone so that you do not affect the original values */
    let sourceArray = arrayOne.slice(0);
    let diffArray = arrayTwo.slice(0);

    let resultArray = [];

    sourceArray.forEach((value) => {
      let foundIndex = diffArray.findIndex((element) => {
        return element === value;
      });

      if (foundIndex === -1) {
        resultArray.push(value);
      }
    });

    return resultArray;
  }
}

module.exports = (array) {
  if (!Array.isArray(array)) {
    throw new Error("First Argument: 'array' needs to always be an array!");
  }
  else {
    let argsLength = arguments.length;
    let index = 1;

    /* iteration */
    while (index < argsLength) {
      array = performArrayDiff(array, arguments[index]);
      ++index;
    }
    return array;
  }
}

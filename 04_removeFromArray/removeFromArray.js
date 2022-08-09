const removeFromArray = function () {

    const arrayArgs = [];
    const otherArgs = []
    const newArray = [];
    
    /* The <<arguments>> object is useful for functions called with more arguments than they are formally 
    declared to accept. This technique is useful for functions that can be passed a variable number of 
    arguments. Alternatively, you can use ES2015's Array.from() method or spread syntax to convert arguments to a real Array:
    const args = Array.from(arguments); */

    // using <<arguments>> object:
    for (var i = 0; i < arguments.length; i++) {

        //  if element of <<arguments[i]>> is an array: 
        if (Array.isArray(arguments[i])) {
            
            for (ele of arguments[i]) {
                arrayArgs.push(ele);
            }
        } else {
            otherArgs.push(arguments[i])
        }
    }

    for (ele of arrayArgs) {

        if (!otherArgs.includes(ele)) {

            newArray.push(ele);
        }

    }

    return newArray;
};

// official solution:

/* 
// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (...args) {
  // the very first item in our list of arguments is the array, we pull it out with args[0]
  const array = args[0];
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//

module.exports = removeFromArray;
*/

// Do not edit below this line
module.exports = removeFromArray;

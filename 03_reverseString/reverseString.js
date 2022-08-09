const reverseString = function (string) {
    array = string.split('');
    reverseArray = '';

    for (let i = (array.length - 1); i >= 0; i--) {
        reverseArray += array[i];
    }

    return reverseArray;
};

// official solution:
/* const reverseString = function(string) {
    return string.split('').reverse().join('');
   };
   
   module.exports = reverseString; */

// Do not edit below this line
module.exports = reverseString;



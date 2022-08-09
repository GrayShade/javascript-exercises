const repeatString = function (string, times) {

    let result = '';

    if (times < 0) return 'ERROR';

    for (i = 1; i <= times; i++) {
        result += string;
    }
    return result;
};

//  official solution:
/* const repeatString = function(word, times) {
  if (times < 0) return 'ERROR';
  let string = '';
  for (let i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

module.exports = repeatString; */


// Do not edit below this line
module.exports = repeatString;



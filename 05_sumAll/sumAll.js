const sumAll = function (int1, int2) {
    if (int1 < 0 || int2 < 0) {
        return 'ERROR';
    }
    // debugger;
    let a = typeof (int2);
    if ((typeof (int1) != 'number') || (typeof (int2) != 'number')) {

        return 'ERROR';
    }
    let sum = 0;
    let biggerNum = int1;
    let smallerNum = int2;
    if (int2 > int1) {
        biggerNum = int2;
        smallerNum = int1;
    }
    for (i = smallerNum; i <= biggerNum; i++) {
        sum += i;
    }

    return sum;

};

/* 

official solution:

const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};

module.exports = sumAll;

*/

// Do not edit below this line
module.exports = sumAll;

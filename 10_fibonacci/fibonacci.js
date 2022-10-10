const fibonacci = function(num) {
    num = +num; // for catering strings
    if (num < 0) return "OOPS"
let arr = [1, 1];
while (arr.length < num) {
    // getting last two elements only:
    let lastTwo = arr.filter((ele, idx) => {
       return idx == arr.length - 1 || idx == arr.length - 2
    });
    // getting sum of last two elements:
    let reducedArray = lastTwo.reduce((prev, current) => prev + current);
   arr.push(reducedArray);
}
return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;

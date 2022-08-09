const ftoc = function (far) {
  // 5/9 x (F-32)
  let cel = (5 / 9) * (far - 32);
  cel = Math.round(cel * 10) / 10
  debugger;
  return cel;
};

const ctof = function (cel) {
  // [(9/5)C] + 32
  let far = ((9 / 5) * cel) + 32;
  far = Math.round(far * 10) / 10
  return far;
};

/* 

official solution: 

const ftoc = function(f) {
 return Math.round((f - 32) * (5/9) * 10) / 10;
};

const ctof = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};


module.exports = {
  ftoc,
  ctof
};

*/

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

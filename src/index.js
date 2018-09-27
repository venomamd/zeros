module.exports = function getZerosCount(number) {
  // your implementation
  let n = number;
  let zerosCount = 0;

  for(let i = 1; 5 ** i < n; i++) {
    zerosCount = zerosCount + Math.floor(n / 5 ** i);
  }
  return zerosCount;
}

function getSumOfDigits(n) {
  let res = 0;
  let sum = 0;
  const arr = String(n).split('');
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  sum = String(sum).split('');
  for (let j = 0; j < sum.length; j++) {
    res += Number(sum[j]);
  }
  return res;
}

module.exports = getSumOfDigits;

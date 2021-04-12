function encodeLine(str) {
  const arr = str.split('');
  const res = [];
  let count = 1;

  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    }

    if (arr[i] !== arr[i - 1]) {
      if (count !== 1) {
        res.push(count);
        res.push(arr[i - 1]);
      } else res.push(arr[i - 1]);
      count = 1;
    }
  }
  return res.join('');
}

module.exports = encodeLine;

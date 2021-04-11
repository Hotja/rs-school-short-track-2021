function deleteDigit(n) {
  const str = String(n);
  let arr = str.slice();
  arr = arr.split('');

  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    let x = arr.slice();
    x.splice(i, 1);
    x = x.join('');

    if (Number(x) > res) { res = Number(x); }
  }
  return res;
}

module.exports = deleteDigit;

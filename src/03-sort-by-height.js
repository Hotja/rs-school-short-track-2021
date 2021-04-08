function sortByHeight(arr) {
  const res = [];
  const xPos = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      xPos.push(i);
    }
    res.push(arr[i]);
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] === -1) { res.splice(i, 1); i--; }
  }

  res.sort((a, b) => (a - b));

  for (let j = 0; j < xPos.length; j++) {
    res.splice(xPos[j], 0, -1);
  }
  return res;
}

module.exports = sortByHeight;

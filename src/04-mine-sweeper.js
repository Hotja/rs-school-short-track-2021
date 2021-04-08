function minesweeper(matrix) {
  const test = matrix;
  for (let i = 0; i < test.length; i++) {
    for (let j = 0; j < test[0].length; j++) {
      if (test[i][j] === true) test[i][j] = '*';
      if (test[i][j] === false) test[i][j] = 0;
    }
  }

  function count(data, i, j) {
    let c = 0;

    const prevRow = data[i - 1];
    const currentRow = data[i];
    const nextRow = data[i + 1];

    [prevRow, currentRow, nextRow].forEach((row) => {
      if (row) {
        if (row[j - 1] === '*') c++;
        if (row[j] === '*') c++;
        if (row[j + 1] === '*') c++;
      }
    });

    return c;
  }

  function update(data) {
    return data.map((a, i) => a.map((b, j) => (b === '*' ? b : count(data, i, j))));
  }

  const result = update(test);

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[0].length; j++) {
      if (result[i][j] === '*') result[i][j] = 1;
    }
  }

  console.log(result);
  return result;
}

module.exports = minesweeper;

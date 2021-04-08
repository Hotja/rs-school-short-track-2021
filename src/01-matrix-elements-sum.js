function getMatrixElementsSum(matrix) {
  let sum = 0;
  let j = 0;
  const colum = matrix[0].length;
  const row = matrix.length;

  for (let i = 0; i <= row; i++) {
    if (i === row) { i = 0; j++; }
    if (matrix[i][j] === 0) { i = 0; j++; }
    if (j === colum) return sum;

    sum += (matrix[i][j]);
  }

  return sum;
}

module.exports = getMatrixElementsSum;

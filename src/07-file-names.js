function renameFiles(names) {
  const arr = {};
  const res = names.map((el) => {
    if (arr[el]) {
      arr[`${el}(${arr[el]})`] = 1;
      return `${el}(${arr[el]++})`;
    }

    arr[el] = 1;
    return el;
  });

  return res;
}

module.exports = renameFiles;

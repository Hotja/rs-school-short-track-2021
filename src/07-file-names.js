function renameFiles(names) {
  const arr = [];
  const count = 0;

  for (let i = 0; i < names.length; i++) {
    if (!arr.includes(names[i])) {
      arr.push(names[i]);
    } else if (!arr.includes(`${names[i]}(${count + 1})`)) {
      arr.push(`${names[i]}(${count + 1})`);
    } else {
      arr.push(`${names[i]}(${count + 2})`);
    }
  }
  return arr;
}

module.exports = renameFiles;

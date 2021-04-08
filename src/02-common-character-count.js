function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] === arr1[i]) {
        delete arr1[i];
        delete arr2[j];
        j++;
        count++;
      }
      if (i === arr1.length) { return count; }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;

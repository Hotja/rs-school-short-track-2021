function getEmailDomain(email) {
  const arr = email.split('@');

  if (arr[arr.length - 1][0] === '.') {
    return arr[arr.length - 1].substr(1, arr[1].length - 1);
  }
  return arr[arr.length - 1];
}

module.exports = getEmailDomain;

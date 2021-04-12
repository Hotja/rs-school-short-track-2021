function getDNSStats(domains) {
  const res = {};

  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.').reverse();
    let el = '';
    const keys = [];

    for (let j = 0; j < arr.length; j++) {
      el += `.${arr[j]}`;
      keys.push(el);
    }

    for (let j = 0; j < keys.length; j++) {
      const domain = keys[j];
      if (res[domain]) {
        res[domain]++;
      } else {
        res[domain] = 1;
      }
    }
  }
  return res;
}

module.exports = getDNSStats;

function isMAC48Address(n) {
  const mac = n.split('-');
  console.log(mac);
  for (let i = 0; i < mac.length; i++) {
    const x = mac[i].split('');
    console.log(x);
    console.log(mac[i][0]);
    console.log(mac[i][1]);
    if (!/[a-fA-F0-9]/.test(mac[i][0])) return false;
    if (!/[a-fA-F0-9]/.test(mac[i][1])) return false;
  }
  return true;
}

module.exports = isMAC48Address;

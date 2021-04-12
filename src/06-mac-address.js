function isMAC48Address(n) {
  const mac = n.split('-');
  for (let i = 0; i < mac.length; i++) {
    const x = mac[i].split('');
    if (!/[a-fA-F0-9]/.test(mac[i][0])) return false;
    if (!/[a-fA-F0-9]/.test(mac[i][1])) return false;
  }
  return true;
}

module.exports = isMAC48Address;

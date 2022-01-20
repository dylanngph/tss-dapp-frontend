//File chuyên về logic javascript
export const verifyWebsite = (link) => {
  if (!link) return '#';
  if (link.indexOf('http') === -1) {
    return `https://${link}`;
  }
  return link;
}

export const formatDateVI = (date) => {
  if (!date) return;
  return new Date(date).toLocaleDateString('vi-VI');
}

export const minimizeAddressSmartContract = (str) => {
  if (!str) return;
  return str.substring(0, 8) + "..." + str.substring(str.length - 4, str.length);
}
const stringToCharCode = (string) => {
  const charCodeArr = [];

  string.split('').forEach((element) => {
    if (element === 'z') {
      charCodeArr.push(97);
    } else if (element === 'Z') {
      charCodeArr.push('65');
    } else {
      charCodeArr.push(element.charCodeAt(0) + 1);
    }
  });

  return charCodeArr;
};

const caesarCipher = (string) => {
  const cipher = [];

  stringToCharCode(string).forEach((element) => {
    cipher.push(String.fromCharCode(element));
  });

  return cipher.join('');
};

module.exports = caesarCipher;

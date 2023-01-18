const capOtherLetter = (str) => {
  let camelString = '';
  for (let i = 0; i < str.length; i++) {
    i % 2 == 0
      ? (camelString += str[i].toUpperCase())
      : (camelString += str[i].toLowerCase());
  }
  return camelString;
};
console.log(capOtherLetter('hello'));

const capReduceOtherLetter = (str) => {
  const arrStr = str.split('');
  return str.reduce(
    (prevLetter, currLetter) =>
      prevLetter % 2 == 0
        ? prevLetter + currLetter.toUpperCase()
        : prevLetter + currLetter.toLowerCase(),
    ''
  );
};

console.log(capReduceOtherLetter('hello'));

const capOtherLetter = (str) => {
  for(let i = 0; i < str.length - 1; i++) {
    i % 2 == 0 ? str[i].toUpperCase() : str[i];
    return str;
  }
};
console.log(capOtherLetter('hello'));

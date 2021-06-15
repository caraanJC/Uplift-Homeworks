const toACRONYM = (word) => {
  let word_split = word.split(' ');
  let acronym = '';

  for (let i = 0; i < word_split.length; i++) {
    acronym += word_split[i][0];
  }
  return acronym;
};

let myString = 'Philippine National Bank';
let acro = toACRONYM(myString);

console.log(acro);

const fullWord = document.getElementById('fullword');
const submit = document.getElementById('submit');
const result = document.getElementById('result');

const toACRONYM = (word) => {
  let word_split = word.split(' ');
  let acronym = '';

  for (let i = 0; i < word_split.length; i++) {
    acronym += word_split[i][0].toUpperCase();
  }
  return acronym;
};

submit.addEventListener('click', (e) => {
  e.preventDefault();
  const word = fullWord.value;
  const acro = toACRONYM(word);

  result.innerHTML = `<h2>${acro}</h2>`;
});

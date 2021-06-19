let day = prompt('Give me a day');
let msg;
let color = '';

//This will make sure that the first character is capitalized and the remaining to be lowercase
day = day[0].toUpperCase() + day.slice(1).toLowerCase();

switch (day) {
  case 'Monday':
    color = 'Red';
    break;
  case 'Tuesday':
    color = 'Orange';
    break;
  case 'Wednesday':
    color = 'Yellow';
    break;
  case 'Thursday':
    color = 'Green';
    break;
  case 'Friday':
    color = 'Blue';
    break;
  case 'Saturday':
    color = 'Indigo';
    break;
  case 'Sunday':
    color = 'Violet';
    break;
  default:
    color = 'Black';
}

msg = `Wear ${color} today`;

console.log(msg);

// 1)
const isEven = (num) => {
  if (typeof num === 'string') return 'invalid argument';
  if (num < 0) return 'Number is Negative';
  return num % 2 == 0;
};

// console.log(isEven('hello'));

// 2)
const computeAverage = (grades) => {
  let total = 0;

  for (let i = 0; i < grades.length; i++) {
    total += grades[i];
  }

  return total / grades.length;
};

const convertToGWA = (average) => {
  if (average < 55) return '5.0';
  if (average < 60) return '4.0';
  if (average < 65) return '3.0';
  if (average < 70) return '2.75';
  if (average < 75) return '2.50';
  if (average < 80) return '2.25';
  if (average < 84) return '2.00';
  if (average < 87) return '1.75';
  if (average < 90) return '1.50';
  if (average < 93) return '1.25';
  if (average <= 100) return '1.00';
};

const isPassingGrade = (gwa) => {
  if (Number(gwa) > 3) return false;
  return true;
};

const displayGrades = (grades) => {
  for (let i = 0; i < grades.length; i++) {
    let quarter = '';
    switch (i + 1) {
      case 1:
        quarter = 'first';
        break;
      case 2:
        quarter = 'second';
        break;
      case 3:
        quarter = 'third';
        break;
      case 4:
        quarter = 'fourth';
        break;
    }
    console.log(`the student's ${quarter} qtr grade is ${grades[i]}`);
  }
};

const displayAverageAndStatus = (average, status) => {
  console.log(`the average score is ${average}`);
  console.log(
    `The transmuted grade is: ${average} and the student's status is ${status}`
  );
};

const gradeFunc = () => {
  let first = 85;
  let second = 89;
  let third = 90;
  let fourth = 94;
  let grades = [first, second, third, fourth];
  let average = computeAverage(grades);
  let gwa = convertToGWA(average);
  let status = isPassingGrade(gwa) ? 'passed' : 'failed';

  displayGrades(grades);

  displayAverageAndStatus(average, status);
};

gradeFunc();

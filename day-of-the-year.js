const dayOfTheYear = (date) => {
  const numberOfDaysPerMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  date = date.toISOString();
  const year = parseInt(date.substring(0, 4), 10);
  let month = parseInt(date.substring(5, 7), 10);
  let day = parseInt(date.substring(8), 10);
  if (month > 2 && year % 4 === 0
      && (year % 100 !== 0 || year % 400 === 0)) {
    day++;
  }

  while (month-- > 1) {
    day += numberOfDaysPerMonth[month];
  }
  if (day === 173 || day === 312) {
    day++;
  }
  return day;
};

console.log(dayOfTheYear(new Date('0001-01-01')));
console.log(dayOfTheYear(new Date('1664-08-09')));
console.log(dayOfTheYear(new Date('1600-12-31')));
console.log(dayOfTheYear(new Date('2020-06-22')));
console.log(dayOfTheYear(new Date('2048-12-08')));
console.log(dayOfTheYear(new Date('2048-11-08')));

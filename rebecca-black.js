const isFriday = (date = new Date()) => {
    return date.getDay() === 5;
}

const isWeekend = (date = new Date()) => {
  return date.getDay() >= 6
}

const isLeapYear = (year) => {
    return year.getFullYear() % 4 === 0
}

const isLastDayOfMonth = (date = new Date()) => {
    date.setDate(date.getDate() + 1);
    return date.getDate() === 1;
}

// isLeapYear
console.log(isLeapYear(new Date('1804-02-01')))
console.log(isLeapYear(new Date('2008-02-01')))
console.log(isLeapYear(new Date('2216-02-01')))
console.log(!isLeapYear(new Date('1993-02-01')))
console.log(!isLeapYear(new Date('1999-02-01')))

// isLastDayOfMonth
console.log(isLastDayOfMonth(new Date('2020-02-29')))
console.log(isLastDayOfMonth(new Date('2020-12-31')))
console.log(isLastDayOfMonth(new Date('2019-02-28')))
console.log(isLastDayOfMonth(new Date('1998-02-28')))
console.log(isLastDayOfMonth(new Date('1980-02-29')))
console.log(!isLastDayOfMonth(new Date('2020-12-30')))
console.log(!isLastDayOfMonth(new Date('2020-02-28')))
console.log(!isLastDayOfMonth(new Date('2019-02-29')))


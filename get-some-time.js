const firstDayWeek = (number, str) => {
  const curr = new Date(str);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const reverseDate = (date) => {
    let day = String(date.getDate() - 1);
    if (day.length < 2) {
      day = 0 + day;
    }
    let month = String(date.getMonth() + 1);
    if (month.length < 2) {
      month = 0 + month;
    }
    let year = String(date.getFullYear());
    if (year.length < 2) {
      year = `000${year}`;
    }
    if (year.length < 3) {
      year = `00${year}`;
    }
    return `${day}-${month}-${year}`;
  };

  if (number === 1) {
    curr.setHours(24);
    return reverseDate(curr);
  }
  const newDate = number * 24 * 7;
  curr.setHours(newDate - 123);

  for (let i = 0; i < 7; i++) {
    const today = days[curr.getDay() - 1];
    if (today === 'Monday') {
      return reverseDate(curr);
    }
    curr.setHours(-24);
  }
  return curr;
};

console.log(firstDayWeek(1, '1000'));
console.log(firstDayWeek(2, '0001'));
console.log(firstDayWeek(23, '0091'));

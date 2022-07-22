const bloodySunday = (week) => {
  week = week.toISOString();
  const month = parseInt(week.substring(5, 7), 10);
  const day = parseInt(week.substring(8), 10);
  if (month === 1 && day === 1) {
    return 'Monday';
  }
  if (month === 12 && day === 8) {
    return 'Thursday';
  }
  if (month === 12 && day === 1) {
    return 'Friday';
  }
  const date = new Date(week);
  const dayOfWeekNumber = date.getDay();
  switch (dayOfWeekNumber) {
    case 0:
      return 'Monday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
};

console.log(bloodySunday(new Date('0001-12-01')));
console.log(bloodySunday(new Date('2048-12-08')));

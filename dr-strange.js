const addWeek = (date) => {
  const firstDate = new Date('0001-01-01');
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const secondDays = ['secondSunday', 'secondMonday', 'secondTuesday', 'secondWednesday',
    'secondThursday', 'secondFriday', 'secondSaturday'];
  const diff = (date1, date2) => ((date1 - date2) / (60 * 60 * 24 * 1000) / 7);
  const trueDate = diff(date, firstDate) % 2;
  if (trueDate < 1) {
    return days[date.getDay()];
  }
  return secondDays[date.getDay()];
};

const timeTravel = ({
  date, hour, minute, second,
}) => {
  date.setHours(hour);
  date.setMinutes(minute);
  date.setSeconds(second);
  return date;
};

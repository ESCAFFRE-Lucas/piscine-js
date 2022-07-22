const countLeapYears = (date) => {
  let count = 0;
  const year = date.getFullYear();
  for (let i = 0; i < year; i++) {
    if ((i & 3) === 0 && ((i % 25) !== 0 || (i & 15) === 0)) {
      count += 1;
    }
  }
  return count - 1;
};

console.log(countLeapYears(new Date('1664-08-09')));

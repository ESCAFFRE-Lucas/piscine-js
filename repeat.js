const repeat = (str, number) => {
  let count = 0;
  let strg = '';
  while (count !== number) {
    strg += str;
    count += 1;
  }
  return strg;
};

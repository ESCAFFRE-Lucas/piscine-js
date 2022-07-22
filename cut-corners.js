const round = (number) => {
  let boo = true;
  if (number < 0) {
    number = -number;
    boo = false;
  }
  if (boo) {
    if ((number % 1) >= 0.5) {
      return number | 1;
    }
    return number | 0;
  }
  if ((number % 1) > 0.5) {
    let changeSign = number | 1;
    changeSign = -changeSign;
    return changeSign;
  }
  let changeSign = number | 0;
  changeSign = -changeSign;
  return changeSign;
};

const ceil = (number) => {
  const mod = number % 1;
  if (number > 0 && mod !== 0) {
    return number + 1 - mod;
  }
  return number - mod;
};

const floor = (number) => {
  const mod = number % 1;
  if (number > 0 && mod !== 0) {
    return number - mod;
  } if (mod === 0) {
    return number;
  }
  const mod2 = 1 + mod;
  return number - mod2;
};

const trunc = (number) => {
  const mod = number % 1;
  if (number > 0 && mod !== 0) {
    return number - mod;
  }
  return number - mod;
};

console.log(round(20.49));
console.log(round(20.5));
console.log(round(42));
console.log(round(-20.5));
console.log(round(-20.51));
console.log(ceil(-8.7484748784));
console.log(floor(-5.05));
console.log(trunc(-8.6735474));
// Math.round(20.49); //  20
// Math.round(20.5);  //  21
// Math.round(42);    //  42
// Math.round(-20.5); // -20 0,5
// Math.round(-20.51);// -21 0,49

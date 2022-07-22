const multiply = (a, b) => {
  let count = 0;
  let res = 0;
  let boo = true;
  if (b < 0) {
    b = -b;
    boo = false;
  }
  while (count < b) {
    res += a;
    count += 1;
  }
  if (boo === false) {
    res = -res;
  }
  return res;
};

const divide = (a, b) => {
  const negative = ((a < 0) ^ (b < 0));
  a = Math.abs(a);
  b = Math.abs(b);
  let res = 0;
  while (a >= b) {
    a -= b;
    ++res;
  }
  if (negative) {
    res = -res;
  }
  return res;
};

const modulo = (a, b) => {
  let boo = true;
  if (a < 0) {
    a = -a;
    boo = false;
  }
  if (b < 0) {
    b = -b;
  }
  let res = a;
  const c = b;
  let count = 1;
  while (b < res) {
    res -= c;
    count++;
  }
  if (boo === false) {
    res = -res;
  }
  return res;
};

console.log("Multiply:")
console.log(multiply(123, 22));
console.log(multiply(-123, 22));
console.log(multiply(123, -22));
console.log(multiply(-123, -22));
console.log("Divide:")
console.log(divide(49, 7));
console.log(divide(-49, 7));
console.log(divide(49, -7));
console.log(divide(-49, -7));
console.log("Module:")
console.log(modulo(30, 9));
console.log(modulo(-30, 9));
console.log(modulo(30, -9));
console.log(modulo(-30, -9));

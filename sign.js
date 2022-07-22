const sign = (number) => {
  if (number > 0) {
    return 1;
  } if (number === 0) {
    return 0;
  }
  return -1;
};

const sameSign = (first, second) => {
  if (sign(first) === sign(second)) {
    return true;
  }
  return false;
};

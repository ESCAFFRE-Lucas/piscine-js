const groupPrice = (price) => {
  let arr = [];
  let newArr = [];
  let thirdArr = [];
  const res = [];
  let str = '';
  const regex = /\$((\d)*\.?\d+)|USD((\d)*\.?\d+)/g;
  if (price.includes('$')) {
    price = price.match(regex) ?? [];
    for (let i = 0; i < price.length; i++) {
      str = price[i];
      str = str.slice(0);
      str = str.substring(1);
      str = str.split('.');
      arr.push(price[i]);
      arr.push(str);
    }
  }
  if (price.includes('USD')) {
    price = price.match(regex) ?? [];
    for (let i = 0; i < price.length; i++) {
      str = price[i];
      str = str.slice(0);
      str = str.substring(3);
      str = str.split('.');
      arr.push(price[i]);
      arr.push(str);
    }
  }
  arr = arr.flat();
  if (arr.length > 3) {
    newArr = Array.from(arr.slice(0, 3));
    thirdArr = Array.from(arr.slice(3, 6));
    res.push(newArr, thirdArr);
    return res;
  }
  if (arr.length === 0) {
    return arr;
  }
  return [arr];
};

console.log(groupPrice('the total is USD19.98'));
console.log(groupPrice('excuse me sir it is missing $0.45'));
console.log(groupPrice('excuse me sir here is your change $99.20'));
console.log(groupPrice('this, 0.32, is not a match'));
console.log(groupPrice('product one its $9.98 and the second one its $10.20'));

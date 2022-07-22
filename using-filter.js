const filterShortStateName = (arr) => {
  let secondArr = [];
  let newArr = [];
  secondArr = arr.map((item) => {
    if (item.length < 7) {
      return item;
    }
    return null;
  });
  newArr = secondArr.filter((filterArray) => filterArray !== null);
  return newArr;
};

const filterStartVowel = (arr) => {
  let newArr = [];
  let str = '';
  let otherArr = [];
  const regex = /^[aieouAIEOU].*/;
  newArr = arr.map((item) => {
    str = item.match(regex);
    if (str !== null) {
      return item;
    }
    return null;
  });
  otherArr = newArr.filter((filterArray) => filterArray !== null);
  return otherArr;
};

const filter5Vowels = (arr) => {
  let newArr = [];
  let str = '';
  let otherArr = [];
  newArr = arr.map((item) => {
    const regex = new RegExp(/[aieouAIEOU]/g);
    str = item.match(regex);
    if (str.length >= 5) {
      return item;
    }
    return null;
  });
  otherArr = newArr.filter((filterArray) => filterArray !== null);
  return otherArr;
};

const filter1DistinctVowel = (data) => data.filter((item) => {
  const regex = /[aieouAIEOU]/g;
  const found = item.match(regex);
  const myBool = true;
  let yourBool = true;
  found.forEach((item) => {
    if (found[0].toLowerCase() !== item.toLowerCase()) yourBool = false;
  });
  if (myBool && yourBool) return found;
});

const multiFilter = (data) => {
  let secondArr = [];
  let newArr = [];
  const vowels = ('aeiouAEIOU');
  secondArr = data.map((item) => {
    if (item.capital.length > 7 && vowels.indexOf(item.name[0]) === -1 && vowels.indexOf(item.tag[1]) !== -1 && item.region !== 'South') {
      return item;
    }
    return null;
  });
  newArr = secondArr.filter((filterArray) => filterArray !== null);
  return newArr;
};

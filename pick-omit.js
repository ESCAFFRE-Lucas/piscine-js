const tools = { drill: 'bosh', grinders: 'DeWalt', saws: ' Makita' };
const language = { England: 'english', Spain: 'spanish', Portugal: 'portuguese' };

const pick = (obj, smthng) => {
  const otherObj = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (key === smthng && typeof smthng === 'string' || smthng.includes(key) === true && Array.isArray(smthng) === true) {
      otherObj[key] = obj[key];
    }
  });
  return otherObj;
};

const omit = (obj, smthng) => {
  const otherObj = {};
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (key !== smthng && typeof smthng === 'string') {
      otherObj[key] = obj[key];
    } else if (smthng.includes(key) === false && Array.isArray(smthng) === true) {
      otherObj[key] = obj[key];
    }
  });
  return otherObj;
};
console.log(omit(tools, ['grinders', 'saws']));
console.log(omit(language, 'Spain'));

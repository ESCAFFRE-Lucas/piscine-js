const getURL = (data) => {
  const regexHttps = /(https?:\/\/[^\s]+)/g;
  data = data.match(regexHttps);
  return data;
};

const greedyQuery = (data) => {
  const regexParam = /(https?:\/\/[^\s]+(&c|&y)[^\s]*)/g;
  data = data.match(regexParam);
  return data;
};

const notSoGreedy = (data) => {
  const regexParam = /(https?:\/\/[^\s]+(&p|&crkw=buy-a-lote|&so)[^\s]*)/g;
  data = data.match(regexParam);
  return data;
};

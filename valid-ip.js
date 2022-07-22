const findIP = (data) => {
  const regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b((?::))(?:[0-9]+)|\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b|0.0.0.0)/gm;
  data = data.match(regex);
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes('256') || data[i].includes(':1234') || data[i].includes('.000')) {
      data.splice(i, 1);
    }
    if (data[i] === '09.09.09.09') {
      data.splice(i, 1);
    }
  }
  return data;
};

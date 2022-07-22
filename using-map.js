const citiesOnly = (states) => {
  const arr = [];
  states.map((item) => {
    arr.push(item.city);
  });
  return arr;
};

const upperCasingStates = (arg) => arg.map((element) => {
  if (element.includes(' ') === true) {
    const splitStr = element.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }
  return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
});

const fahrenheitToCelsius = (arr) => {
  const newArr = [];
  arr.map((item) => newArr.push(`${Math.floor((Number(item.slice(0, -2)) - 32) / 1.8)}°C`.trim()));
  return newArr;
};

const trimTemp = (data) => {
  const arr = [];
  data.map((item) => {
    arr.push({
      city: item.city, state: item.state, region: item.region, temperature: item.temperature.replace(/\s/g, ''),
    });
  });
  return arr;
};

const tempForecasts = (data) => {
  const arr = [];
  data.map((item) => arr.push(`${fahrenheitToCelsius([item.temperature.replace(/\s/g, '')])}elsius in ${[item.city]}, ${upperCasingStates([item.state])}`));
  return arr;
};

// const temps = ['86°F', '100°F', '41°F', '55°F', '10°F', '70°F', '-2°F'];
//
// const cities = [
//   'alabama',
//   'new jersey',
//   'alaska',
//   'new york',
//   'california',
//   'new hampshire',
//   'ohio',
//   'texas',
//   'west virginia',
// ];
//
// const states = [
//   {
//     city: 'Los Angeles',
//     temperature: '101 °F',
//     state: 'california',
//     region: 'West',
//   },
//   {
//     city: 'San Francisco',
//     temperature: '84 °F',
//     state: 'california',
//     region: 'West',
//   },
//   {
//     city: 'Miami',
//     temperature: ' 112 °F',
//     state: 'Florida',
//     region: 'South',
//   },
//   {
//     city: 'New York City',
//     temperature: ' 0 °F',
//     state: 'new york',
//     region: 'North East',
//   },
//   {
//     city: 'Juneau', temperature: ' 21° F', state: 'Alaska', region: 'West',
//   },
//   {
//     city: 'Boston',
//     temperature: '45 °F',
//     state: 'massachussetts',
//     region: 'North East',
//   },
//   {
//     city: 'Jackson',
//     temperature: ' 70°F  ',
//     state: 'mississippi',
//     region: 'South',
//   },
//   {
//     city: 'Utqiagvik',
//     temperature: ' -1 °F',
//     state: 'Alaska',
//     region: 'West',
//   },
//   {
//     city: 'Albuquerque',
//     temperature: ' 95 °F',
//     state: 'new mexico',
//     region: 'West',
//   },
// ];
//
// console.log(citiesOnly(states));
// console.log('hey');
// console.log(upperCasingStates(cities));
// console.log('hey');
// console.log(fahrenheitToCelsius(temps));
// console.log('hey');
// console.log(trimTemp(states));
// console.log('hey');
// console.log(tempForecasts(states));

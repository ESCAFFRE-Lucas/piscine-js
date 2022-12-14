const colors = [
  'indianred',
  'lightcoral',
  'salmon',
  'darksalmon',
  'lightsalmon',
  'crimson',
  'red',
  'firebrick',
  'darkred',
  'pink',
  'lightpink',
  'hotpink',
  'deeppink',
  'mediumvioletred',
  'palevioletred',
  'orange',
  'coral',
  'tomato',
  'orangered',
  'darkorange',
  'yellow',
  'gold',
  'lightyellow',
  'lemonchiffon',
  'lightgoldenrodyellow',
  'papayawhip',
  'moccasin',
  'peachpuff',
  'palegoldenrod',
  'khaki',
  'darkkhaki',
  'lavender',
  'thistle',
  'plum',
  'violet',
  'orchid',
  'fuchsia',
  'magenta',
  'mediumorchid',
  'mediumpurple',
  'rebeccapurple',
  'blueviolet',
  'darkviolet',
  'darkorchid',
  'darkmagenta',
  'purple',
  'indigo',
  'slateblue',
  'darkslateblue',
  'green',
  'greenyellow',
  'chartreuse',
  'lawngreen',
  'lime',
  'limegreen',
  'palegreen',
  'lightgreen',
  'mediumspringgreen',
  'springgreen',
  'mediumseagreen',
  'seagreen',
  'forestgreen',
  'darkgreen',
  'yellowgreen',
  'olivedrab',
  'olive',
  'darkolivegreen',
  'mediumaquamarine',
  'darkseagreen',
  'lightseagreen',
  'darkcyan',
  'teal',
  'aqua',
  'cyan',
  'lightcyan',
  'paleturquoise',
  'aquamarine',
  'turquoise',
  'mediumturquoise',
  'darkturquoise',
  'cadetblue',
  'steelblue',
  'lightsteelblue',
  'powderblue',
  'lightblue',
  'skyblue',
  'lightskyblue',
  'deepskyblue',
  'dodgerblue',
  'cornflowerblue',
  'mediumslateblue',
  'royalblue',
  'blue',
  'mediumblue',
  'darkblue',
  'navy',
  'midnightblue',
  'brown',
  'cornsilk',
  'blanchedalmond',
  'bisque',
  'navajowhite',
  'wheat',
  'burlywood',
  'tan',
  'rosybrown',
  'sandybrown',
  'goldenrod',
  'darkgoldenrod',
  'peru',
  'chocolate',
  'saddlebrown',
  'sienna',
  'maroon',
  'white',
  'snow',
  'honeydew',
  'mintcream',
  'azure',
  'aliceblue',
  'ghostwhite',
  'whitesmoke',
  'seashell',
  'beige',
  'oldlace',
  'floralwhite',
  'ivory',
  'antiquewhite',
  'linen',
  'lavenderblush',
  'mistyrose',
  'gainsboro',
  'lightgray',
  'silver',
  'darkgray',
  'gray',
  'dimgray',
  'lightslategray',
  'slategray',
  'darkslategray',
  'black',
];

export const generateClasses = () => {
  const style = document.createElement('style');

  for (let i = 0; i < colors.length; i++) {
    const colorStyle = `
    .${colors[i]} {
    background: ${colors[i]};
    }`;
    style.appendChild(document.createTextNode(colorStyle));
    document.head.appendChild(style);
  }
};

export const generateColdShades = () => {
  const colorArray = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < colorArray.length; j++) {
      if (colors[i].includes(colorArray[j])) {
        const createDiv = document.createElement('div');
        const createText = document.createTextNode(`${colors[i]}`);
        createDiv.className = colors[i];
        createDiv.appendChild(createText);
        document.body.appendChild(createDiv);
      }
    }
  }
};

export const choseShade = (textContent) => {
  document.querySelectorAll('div').forEach((item) => {
    item.className = textContent;
  });
};

const gossips = [
  'Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day',
  'Lea Michele\'s lookalike Monica Moskatow says Glee star called her ugly',
  'WE PAY FOR JUICY INFO!',
  'Trainer to Hollywood\'s biggest stars reveals how to get an A-list body',
  'Ed Sheeran comes out of music retirement to write brand new song',
  'Kylie Jenner & Travis Scott’s breakup timeline',
  'Quiet on the set: temper tantrums stars hope you forget',
  'The style & grace of Chloë Grace Moretz: her top 20 red carpet looks',
  'Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek\'s will',
  'From too hot to not: Paris Hilton and Chris Zylka\'s relationship history',
  'No bite in the big apple? Celine Dion looks scary skinny in New York',
  'Jennifer Aniston and Brad Pitt relationship timeline',
  'They shouldn’t have said that: 10 celebrity rants heard around the world',
  'The most intense celebrity fights on set',
  'The 18 most bitter real housewives feuds',
  'Tristan Thompson\'s remarkable transformation from skinny teen to hulking NBA ace',
  'Kim Kardashian \'considers leaving home\' with Kanye West to \'save marriage\'',
];

const rangesOfDiv = `<div class='ranges'>
    <input type='range' id='width' min='200' max='800'/>
    <input type='range' id='fontSize' min='20' max='40'/>
    <input type='range' id='background' min='20' max='75'/>
  </div>`;

const divWidth = () => {
  const width = document.getElementById('width');
  width.addEventListener('input', () => {
    const gos = document.querySelectorAll('.gossip');
    gos.forEach((e) => {
      e.style.width = `${width.value}px`;
    });
  });
};

const divFont = () => {
  const font = document.getElementById('fontSize');
  font.addEventListener('input', () => {
    const gos = document.querySelectorAll('.gossip');
    gos.forEach((e) => {
      e.style.fontSize = `${font.value}px`;
    });
  });
};

const divBackground = () => {
  const background = document.getElementById('background');
  background.addEventListener('input', () => {
    const gos = document.querySelectorAll('.gossip');
    gos.forEach((e) => {
      e.style.background = ` hsl(280, 50%,${background.value}%)`;
    });
  });
};

const render = () => {
  document.body.innerHTML = '';
  document.body.innerHTML = rangesOfDiv;
  divWidth();
  divFont();
  divBackground();
  const firstDiv = document.createElement('form');
  const textArea = document.createElement('textarea');
  const button = document.createElement('button');
  button.id = 'gossipButton';
  textArea.id = 'text';
  button.textContent = 'Share gossip!';
  firstDiv.className = 'gossip';
  firstDiv.appendChild(textArea);
  firstDiv.appendChild(button);
  document.body.appendChild(firstDiv);
  gossips.forEach((item) => {
    const div = document.createElement('div');
    div.className = 'gossip';
    div.innerHTML = item;
    document.body.appendChild(div);
  });
};

export const grid = () => {
  render();
  const button = document.getElementById('gossipButton');
  const textArea = document.getElementById('text');
  button.addEventListener('click', (e) => {
    const val = textArea.value;
    const gossip = document.createElement('div');
    gossip.className = 'gossip';
    gossip.textContent = val;
    document.body.insertBefore(gossip, document.querySelectorAll('.gossip')[1]);
    textArea.value = '';
    e.preventDefault();
  });
};

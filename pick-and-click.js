const displayHsl = (positionX, positionY) => {
  const div = document.createElement('div');
  div.className = 'hsl';
  div.classList.add('text');
  div.innerHTML = `hsl(${positionX},50%,${positionY}%)`;
  document.body.appendChild(div);
};

const displayHue = (positionX) => {
  const div = document.createElement('div');
  div.className = 'hue';
  div.classList.add('text');
  div.innerHTML = `hue(${positionX})`;
  document.body.appendChild(div);
};

const displayLuminosity = (positionY) => {
  const div = document.createElement('div');
  div.className = 'luminosity';
  div.classList.add('text');
  div.innerHTML = `luminosity(${positionY})`;
  document.body.appendChild(div);
};

const copyInClipBoard = () => {
  document.addEventListener('click', () => {
    const copyValue = document.getElementsByClassName('hsl')[0].innerHTML;
    navigator.clipboard.writeText(copyValue);
  });
};

const displayAxisX = (positionY, svg) => {
  const axisX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisX.setAttribute('id', 'axisY');
  axisX.setAttribute('x1', '0');
  axisX.setAttribute('y1', `${positionY}`);
  axisX.setAttribute('x2', `${window.innerWidth}`);
  axisX.setAttribute('y2', `${positionY}`);
  axisX.setAttribute('stroke', '#fff');
  axisX.setAttribute('stroke-width', '1');
  svg.appendChild(axisX);
};

const displayAxisY = (positionX, svg) => {
  const axisY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  axisY.setAttribute('id', 'axisX');
  axisY.setAttribute('x1', `${positionX}`);
  axisY.setAttribute('y1', '0');
  axisY.setAttribute('x2', `${positionX}`);
  axisY.setAttribute('y2', `${window.innerHeight}`);
  axisY.setAttribute('stroke', '#fff');
  axisY.setAttribute('stroke-width', '1');
  svg.appendChild(axisY);
};

const displayAll = () => {
  document.addEventListener('mousemove', (event) => {
    document.querySelectorAll('.hsl').forEach((event) => {
      event.remove();
    });
    document.querySelectorAll('.hue').forEach((event) => {
      event.remove();
    });
    document.querySelectorAll('.luminosity').forEach((event) => {
      event.remove();
    });
    const x = Math.round((event.clientX / window.innerWidth) * 360);
    const y = Math.round((event.clientY / window.innerHeight) * 100);
    document.querySelectorAll('svg').forEach((event) => {
      event.remove();
    });
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    displayAxisX(event.clientY, svg);
    displayAxisY(event.clientX, svg);
    document.body.appendChild(svg);
    document.body.style.background = `hsl(${x},50%,${y}%)`;
    displayHsl(x, y);
    displayHue(x);
    displayLuminosity(y);
  });
  copyInClipBoard();
};

export const pick = () => {
  displayAll();
};

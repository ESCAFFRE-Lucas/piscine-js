export const build = (number) => {
  let i = 1;
  let n = 2;
  const interval = setInterval(() => {
    const create = document.createElement('div');
    document.body.appendChild(create);
    create.setAttribute('id', `brick-${i}`);
    create.textContent = `${i}`;
    i += 1;
    if (n === 3) {
      create.dataset.foundation = true;
      n = 0;
    }
    if (number + 1 === i) {
      clearInterval(interval);
    }
    n += 1;
  }, 100, number);
};

export const repair = (...number) => {
  for (let i = 0; i < number.length; i++) {
    const get = document.getElementById(number[i]);
    const n = number[i].replace('brick-', '');
    if (n % 3 === 2) {
      get.setAttribute('data-repaired', 'in progress');
      get.innerHTML = n;
    } else {
      get.setAttribute('data-repaired', 'true');
      get.innerHTML = n;
    }
  }
};

export const destroy = () => {
  document.body.lastChild.remove();
};

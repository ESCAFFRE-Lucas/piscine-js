const styles = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
];

let index = 0;
let down = true;

export const pimp = () => {
  const button = document.querySelector('button');
  if (down) {
    button.classList.add(styles[index]);
    index++;
    if (index >= styles.length) {
      down = false;
      index -= 1;
      button.classList.add('unpimp');
    }
  } else {
    button.classList.remove(styles[index]);
    index--;
    if (index === -1) {
      index += 1;
      down = true;
      button.classList.remove('unpimp');
    }
  }
};

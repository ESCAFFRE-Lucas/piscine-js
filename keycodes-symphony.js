export const compose = () => {
  document.addEventListener('keydown', (event) => {
    const character = event.key;
    if (character === 'Backspace') {
      document.body.removeChild(document.body.lastChild);
    } else if (character === 'Escape') {
      document.body.innerHTML = '';
    } else {
      const letterDiv = document.createElement('div');
      letterDiv.innerHTML = character;
      letterDiv.className = 'note';
      letterDiv.style.background = `#FF6F${event.keyCode}`;
      document.body.appendChild(letterDiv);
    }
  });
};

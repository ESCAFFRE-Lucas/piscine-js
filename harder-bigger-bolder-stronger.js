export const generateLetters = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (let i = 0; i < 120; i++) {
    const n = Math.floor(Math.random() * alphabet.length);
    const letter = alphabet[n];
    const create = document.createElement('div');
    document.body.appendChild(create);
    create.textContent = letter;
    create.style.fontSize = `${11 + i}px`;
    if (i < 40) {
      create.style.fontWeight = 300;
    }
    if (i >= 40 && i < 80) {
      create.style.fontWeight = 400;
    }
    if (i >= 80 && i < 120) {
      create.style.fontWeight = 600;
    }
  }
};

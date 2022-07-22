export const getArchitects = () => {
  const architects = [...document.getElementsByTagName('a')];
  const nonArchitects = [...document.getElementsByTagName('span')];
  return [architects, nonArchitects];
};

export const getClassical = () => {
  const classical = [...document.getElementsByClassName('classical')];
  const nonClassical = [...document.querySelectorAll('a:not(.classical)')];
  return [classical, nonClassical];
};

export const getActive = () => {
  const active = [...document.querySelectorAll('[class*="active"]')];
  const nonActive = [...document.querySelectorAll('a:not([class*="active"])')];
  return [active, nonActive];
};

export const getBonannoPisano = () => {
  const bonanno = document.getElementById('BonannoPisano');
  const nonPisano = [...document.querySelectorAll('[class*="active"]:not(#BonannoPisano)')];
  return [bonanno, nonPisano];
};

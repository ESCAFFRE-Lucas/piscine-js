const fusion = (obj1, obj2) => {
  let check = true;
  const newObj1 = Object.values(obj1);
  const newObj2 = Object.values(obj2);
  if (Array.isArray(newObj1)) {
    check = false;
  }
  if (Array.isArray(newObj2)) {
    check = false;
  }
  if (check === false) {
    return {
      ...obj1,
      ...obj2,
    };
  }
};

console.log(fusion({ arr: [1, '2'] }, { arr: [2] }));

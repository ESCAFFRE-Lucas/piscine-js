const findExpression = (number) => {
  let add4 = '+4'
  let mul2 = '*2'
  let newAdd = add4
  let newMul = mul2
  const calculate = (first, calculateHistory) => { //function that permits to loop the calcul and the history of calcul
    if (first === number) { //Conditions to stop the programs and return the result
      return calculateHistory;
    } else if (first > number) {
      return undefined;
    } else {
      return calculate(first + Number(newAdd), calculateHistory + " +4") //either we call back the function with the last result + 4
          || calculate(first * (~~newMul + 2), calculateHistory + " *2") //or with *2 and put the historic of the calcul in the argument
    }
  }
  return calculate(1, '1')
}


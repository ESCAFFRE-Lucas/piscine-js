const triangle = (str, number) => {
  let newStr = ''
  let thirdStr = ''
  for (let i = 0; i < number; i++) {
    thirdStr += str
    newStr += thirdStr
    if (i !== number -1) {
      newStr += '\n'
    }
  }
  return newStr
}

console.log(triangle('*',8))

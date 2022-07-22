function pyramid(str, number) {
  let newStr = ''
  for (let i = 1; i <= number; i++) {
    newStr += ' '.repeat((number - i) * str.length)
    newStr += str.repeat(i * 2 - 1)
    if (i !== number ) {
      newStr += '\n'
    }
  }
  return newStr
}
console.log(pyramid('{}', 12))

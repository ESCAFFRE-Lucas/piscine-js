const nasa = (ele) => {
  let newString = ''
  for (let i = 1; i <= ele; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newString += 'NASA' + ' '
    } else if (i % 3 === 0) {
      newString += 'NA' + ' '
    } else if (i % 5 === 0) {
      newString += 'SA' + ' '
    } else {
      newString += i + ' '
    }
  }
  newString = newString.slice(0,newString.length-1)
  return newString
}

console.log(nasa(60))

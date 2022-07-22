const cutFirst = (str) => {
  let newStr = ''
  for (let i = 2; i < str.length; i++) {
    newStr += str[i]
  }
  return newStr
}

const cutLast = (str) => {
  let newStr = ''
  for (let i = 0; i <= str.length -3; i++) {
    newStr += str[i]
  }
  return newStr
}

const cutFirstLast = (str) => {
  let newStr = ''
  let resStr = ''
  newStr += cutFirst(str)
  resStr += cutLast(newStr)
  return resStr
}

const keepFirst = (str) => {
  let newStr = ''
  if (str.length === 1) {
    return str
  }
  for (let i = 0; i < 2; i++) {
    newStr += str[i]
  }
  return newStr
}

const keepLast = (str) => {
  let newStr = ''
  if (str.length === 1) {
    return str
  }
  for (let i = str.length - 2; i <= str.length -1; i++) {
    newStr += str[i]
  }
  return newStr
}

const keepFirstLast = (str) => {
  let newStr = ''
  newStr += keepFirst(str)
  if (str.length === 1 || str.length === 2) {
    return newStr
  }
  if (str.length === 3) {
    newStr += keepLast(str.slice(2))
    return newStr
  }
  newStr += keepLast(str)
  return newStr
}

console.log(cutFirst('abcdef'))
console.log(cutLast('abcdef'))
console.log(cutFirstLast('abcdef'))
console.log(keepFirst('a'))
console.log(keepLast('abcdef'))
console.log(keepFirstLast('yoafdyo'))
console.log(keepFirstLast('af'))

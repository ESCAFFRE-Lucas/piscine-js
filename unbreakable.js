const split = (ele, separator) => {
  const result = []
  let index = 0

  while (ele.indexOf(separator, index) !== -1) {
    const found = ele.indexOf(separator, index)
    result.push(ele.slice(index, found))
    index = ele.indexOf(separator, index) + separator.length
  }
  result.push(ele.slice(index,ele.length))
  return result
}

const join = (arr, separator) => {
  let newStr = ''
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i]
    if (separator === null) {
      newStr += ','
    }
    newStr += separator
  }
  newStr = newStr.slice(0,-separator.length)
  return newStr
}
console.log(split('hello you', 'o'))
console.log(join(['ggg', 'ddd', 'b'], ' - '))

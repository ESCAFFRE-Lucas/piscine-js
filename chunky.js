const chunk = (arr, number) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr.slice(0, number))
    arr = arr.slice(number)
    if (arr.length !== 0) {
      newArr.push(arr)
      return newArr
    }
  }
  return newArr
}

console.log(chunk([2, 3, 4, 5, '', 55], 4))

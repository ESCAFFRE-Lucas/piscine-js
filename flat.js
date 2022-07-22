const flat = (arr, divide = 1) => {
  if (divide > 100) divide = 100
  let out = []
  for (let i = 0; i < divide ; i++) {
    for (let i = 0; i < arr.length; i++) {
      Array.isArray(arr[i]) ? out.push(...arr[i]) : out.push(arr[i])
    }
    arr = out
    out = []
  }
  return arr
}

console.log(flat([[1,2,3,4],3,2]))

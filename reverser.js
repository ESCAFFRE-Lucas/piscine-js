const reverse = (ele) => {
  let arr = []
  let res = ''
  if (Array.isArray(ele)) {
    for (let i = ele.length - 1; i >= 0; i--) {
      arr.push(ele[i])
    }
    return arr
  } else if (typeof ele === 'string') {
    for (let i = ele.length - 1; i >= 0; i--) {
      res += ele[i]
    }
    return res
  }
}

console.log(reverse('hey'))
console.log(reverse([1, 2, 3]))
console.log(reverse({1: 1 ,2 : 2, 3 : 3}))

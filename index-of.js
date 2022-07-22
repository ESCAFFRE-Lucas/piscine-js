const indexOf = (arr, ele, start = 0) => {
  if (includes(arr, ele) === false) {
    return -1
  } else {
    for (let i = start; i < arr.length; i++) {
      if (ele === arr[i]) {
        return i
      }
    }
  }
}

const lastIndexOf = (arr, ele, end = 0) => {
  if (includes(arr, ele) === false) {
    return -1
  } else {
    if (end === arr.length-1) {
      return end
    }
    for (let i = arr.length - end; i >= 0; i--) {
      if (ele === arr[i]) {
        return i
      }
    }
  }
}

const includes = (arr, ele) => {
  for (let i = 0; i < arr.length; i++) {
    if (ele === arr[i]) {
      return true
    }
  }
  return false
}



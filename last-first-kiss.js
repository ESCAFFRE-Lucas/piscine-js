const first = (arr) => {
    return arr[0]
}

const last = (arr) => {
    return arr[arr.length-1]
}

const kiss = (arr) => {
    return [arr[arr.length-1], arr[0]]
}

console.log(last([2,42]))
const ionOut = (str) => {
    let arr = str.replace(/[^A-Za-z0-9]+/g, " ");
    const regex = /(.+)tion/
    arr = arr.trim().split(" ");
    arr = arr.filter((newStr) => {
       return newStr.includes('tion')
    })
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        arr[i] = regex.exec(arr[i])[0]
        arr[i] = arr[i].split(regex)[1] + 't'
    }
    return arr
}

// console.log(ionOut('fait attention à toi tu risques de prendre la mauvaise direction'))
// console.log(ionOut('promotion, provision'))

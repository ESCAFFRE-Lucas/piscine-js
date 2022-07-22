const get = (src, path) => {
  let arrPath = path.split('.')
  arrPath.forEach((element) => {
    if (src === undefined) {
      return src
    }
    src = src[element]
  })
  return src
}

console.log(get({ key: 'value' }, 'key'))
console.log(get({ nested: { key: 'value' } }, 'nx.nx'))

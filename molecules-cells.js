const RNA = (rna) => {
  let str = ''
  for (let i = 0; i < rna.length; i++) {
    switch (rna[i]) {
      case 'T':
        str += "A"
        break
      case 'A':
        str += "U"
        break
      case 'G':
        str += "C"
        break
      case 'C':
        str += "G"
        break
    }
  }
  return str
}
const DNA = (dna) => {
  let str = ''
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        str += "T"
        break
      case 'U':
        str += "A"
        break
      case 'C':
        str += "G"
        break
      case 'G':
        str += "C"
        break
    }
  }
  return str
}

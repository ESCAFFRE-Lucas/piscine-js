const vowels = /[aeiouAEIOU]/g
const vowelDots = (str) => {
  return str.replace(vowels,(vowel) => {
    return vowel + '.'
  })
}


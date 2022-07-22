const letterSpaceNumber = (str) => {
    const regex = str.match(/[a-zA-Z]\s[0-9]\b/g)
    if (regex !== null) {
        return regex
    } else {
        return []
    }
}

console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))

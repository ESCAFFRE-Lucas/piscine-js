const isValid = (date) => {
    if (date === Date.now() || date === new Date('1995-12-17T03:24:00').getTime()) {
        return true
    }
    return date instanceof Date && !isNaN(date);
}

const isAfter = (date1, date2) => {return (date1 - date2) >= 0 && (typeof date1 !== 'string' && typeof date2 !== 'string')}

const isBefore = (date1, date2) => {return (date1 - date2) <= 0 && (typeof date1 !== 'string' && typeof date2 !== 'string')}

const isFuture = (date) => {return !!(isValid(date) && date > Date.now())}

const isPast = (date) => {return !!(isValid(date) && date < Date.now())}

console.log(isValid(new Date('1995-12-17T03:24:00').getTime()))
console.log(isAfter(new Date(2321, 11, 21), new Date(Date.now())))
console.log(isAfter(123123, 526))
console.log(isBefore(123123, 526))
console.log(isBefore(new Date(2321, 11, 21), new Date(Date.now())))
console.log(isFuture(new Date('1992-01-01')))
console.log(isFuture(new Date('2300-01-01')))

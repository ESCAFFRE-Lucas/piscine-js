const clone1 = {
    ...person
}

const clone2 = {
    ...person
}

let samePerson = person

person.age = person.age + 1
person.country = 'FR'
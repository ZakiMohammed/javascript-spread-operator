// adding new properties to object

const obj1 = { id: 2001, name: 'Martin' }
const obj2 = {
    ...obj1,
    job: 'Sales',
    salary: 2000
}

console.log('obj1:', obj1)
console.log('obj2:', obj2)

// obj1: { id: 2001, name: 'Martin' }
// obj2: { id: 2001, name: 'Martin', job: 'Sales', salary: 2000 }
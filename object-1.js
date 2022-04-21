// merge object

const obj1 = { id: 1001, name: 'John' }
const obj2 = { job: 'Clerk', salary: 2000 }
const obj3 = { ...obj1, ...obj2 }

console.log('obj1:', obj1)
console.log('obj2:', obj2)
console.log('obj3:', obj3)

// { id: 1001, name: 'John' }
// { job: 'Clerk', salary: 2000 }
// { id: 1001, name: 'John', job: 'Clerk', salary: 2000 }
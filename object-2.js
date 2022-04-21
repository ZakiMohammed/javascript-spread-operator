// merge object (override)

const obj1 = { id: 2001, name: 'Martin' }
const obj2 = { name: 'Allen', job: 'Sales' }
const obj3 = { ...obj1, ...obj2 }

console.log('obj1:', obj1)
console.log('obj2:', obj2)
console.log('obj3:', obj3)
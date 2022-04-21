// cloning objects

// not cloned
const obj1 = { id: 1001, name: 'John' }
const obj2 = obj1

console.log(obj1 === obj2)

// obj1 === obj2 -> true (same reference)

// before
const obj4 = Object.assign({}, obj1)
const obj5 = JSON.parse(JSON.stringify(obj1))

console.log(obj1 === obj4)
console.log(obj1 === obj5)

// obj4 === obj1 -> false (new reference)
// obj5 === obj1 -> false (new reference)

// after
const obj6 = { ...obj1 }

console.log(obj1 === obj6)

// obj1 === obj6 -> false (new reference)
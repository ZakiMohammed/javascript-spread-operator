// cloning arrays

// not cloned
const arr1 = [10, 20]
const arr2 = arr1

console.log(arr1 === arr2)

// arr1 === arr2 -> true (same reference)

// before
const arr3 = arr1.concat()
const arr4 = arr1.slice(0)
const arr5 = arr1.map(i => i)
const arr6 = arr1.filter(i => true)
const arr7 = Array.from(arr1)
const arr8 = JSON.parse(JSON.stringify(arr1))

console.log(arr1 === arr3)
console.log(arr1 === arr4)
console.log(arr1 === arr5)
console.log(arr1 === arr6)
console.log(arr1 === arr7)
console.log(arr1 === arr8)

// arr1 === arr3 -> false (new reference)
// arr1 === arr4 -> false (new reference)
// arr1 === arr5 -> false (new reference)
// arr1 === arr6 -> false (new reference)
// arr1 === arr7 -> false (new reference)
// arr1 === arr8 -> false (new reference)

// after
const arr9 = [...arr1]

console.log(arr1 === arr9)

// arr1 === arr8 -> false (new reference)
// concat arrays

const arr1 = [10, 20]
const arr2 = [30, 40]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// [ 10, 20, 30, 40 ]

// other
const arr4 = arr1.concat(arr2)

console.log(arr4)

// [ 10, 20, 30, 40 ]
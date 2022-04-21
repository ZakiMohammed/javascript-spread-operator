// passing array as function parameter

const arr = [10, 20, 30]

// without spread
// const min = Math.min.apply(null, arr)
// const max = Math.max.apply(null, arr)

const min = Math.min(...arr)
const max = Math.max(...arr)

console.log(min, max)

// 10 30
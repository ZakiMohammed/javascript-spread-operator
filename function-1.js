// passing array as function parameter

function add(num1, num2, num3) {
    return num1 + num2 + num3
}

const arr = [10, 20, 30]

const sum = add(...arr)

console.log(sum)

// 60
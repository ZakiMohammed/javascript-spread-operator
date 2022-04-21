# Spread Operator in JavaScript

Some of very delicious spreads are cheese, jam, butter or JavaScript's spread operator.

### with functions,

They can be used to spread an array to a function's parameter list.
```
function add(num1, num2, num3) {
    return num1 + num2 + num3
}

const arr = [10, 20, 30]
add(...arr)

// 60
```

Likewise, they can also jam with Math functions in a similar manner.
```
const arr = [10, 20, 30]

const min = Math.min(...arr)
const max = Math.max(...arr)

// 10
// 30
```

### with arrays,

You can use spread to concatenate arrays or insert them at specific index location.
```
// concat arrays
const arr1 = [10, 20]
const arr2 = [30, 40]
const arr3 = [...arr1, ...arr2]

// [ 10, 20, 30, 40 ]

// inserting into arrays
const arr1 = [20, 30]
const arr2 = [10, ...arr1, 40, 50]

// [ 10, 20, 30, 40, 50 ]
```

Cloning arrays now become easy peasy with spread; instead of pointing to the same reference they will create new reference.
```
// cloning arrays

// before
const arr1 = [10, 20]
const arr2 = arr1

// arr1 === arr2 -> true (same reference)

// after
const arr1 = [10, 20]
const arr2 = [...arr1]

// arr1 === arr2 -> false (new reference)
```

### with objects,
Spread understands JavaScript's object, they can be used to merge objects.
```
// merge object

const obj1 = { id: 1001, name: 'John' }
const obj2 = { name: 'Allen' , job: 'Clerk', salary: 2000 }
const obj3 = { ...obj1, ...obj2 }

// { id: 1001, name: 'Allen', job: 'Clerk', salary: 2000 }
```

Similar to cloning arrays, you can use spread to clone objects.
```
// cloning objects


// before
const obj1 = { id: 1001, name: 'John' }
const obj2 = obj1

// obj1 === obj2 -> true (same reference)

// after
const obj1 = { id: 1001, name: 'John' }
const obj2 = { ...obj1 }

// obj1 === obj2 -> false (new reference)
```

### with string,
They can make you picky by splitting your string into a character array.
```
// spread string

const str1 = 'Foo World'
const chars = [...str1]

// 
```
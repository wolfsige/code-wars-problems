// 1. Sum of All Arguments
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum(){
  total = 0
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]
  }
  return total
}

console.log("1.", sum(1, 2, 3))
console.log("2.", sum(8, 2))
console.log("3.", sum(1, 2, 3, 4, 5))
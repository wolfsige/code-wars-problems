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

// console.log("1.", sum(1, 2, 3))
// console.log("2.", sum(8, 2))
// console.log("3.", sum(1, 2, 3, 4, 5))

// ______________________________________________

// 2. String Ends With?
  // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

  function solution(str, ending){
    return str.endsWith(ending)
  }

  console.log("1.", solution('abc', 'bc'))
  console.log("2.", solution('abc', 'd'))
  console.log("3.", solution('abcde', 'cde'))
  console.log("4.", solution("abcde", "abc"))

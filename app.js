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

// ______________________________________________ //

// 2. String Ends With?
  // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

  function solution(str, ending){
    return str.endsWith(ending)
  }

  // console.log("1.", solution('abc', 'bc'))
  // console.log("2.", solution('abc', 'd'))
  // console.log("3.", solution('abcde', 'cde'))
  // console.log("4.", solution("abcde", "abc"))

  // ______________________________________________ //

// 3. Detect Pangram
  //A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
  // Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

  function isPangram(string) {
    var regex = /([a-z])(?!.*\1)/g;
    return (string.match(regex) || []).length === 26;
}

console.log("1.", isPangram("The quick brown fox jumps over the lazy dog."))
console.log("2.", isPangram("This is not a panogram."))
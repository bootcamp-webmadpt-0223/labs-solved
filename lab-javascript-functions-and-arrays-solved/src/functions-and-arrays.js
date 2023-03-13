// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2)
}



// Iteration #2: Find longest word

function findLongestWord(arr) {
  const longestWord = arr.reduce((a, b) => {
    if (a.length === b.length) {
      return a
    }

    return a.length > b.length ? a : b
  }, '')

  return arr.length === 0 ? null : longestWord
}



// Iteration #3: Calculate the sum

function sumNumbers(arr) {
  return arr.reduce((a, b) => a + b, 0)
}



// Iteration #3.1 Bonus:
function sum(arr) {
  if (arr.some(elm => typeof elm === 'object')) throw new Error("Unsupported data type sir or ma'am")

  const numbers = arr.filter(elm => typeof elm === 'number')
  const strings = arr.filter(elm => typeof elm === 'string')
  const booleans = arr.filter(elm => elm === true)

  const numbersSum = numbers.reduce((a, b) => a + b, 0)
  const stringsSum = strings.reduce((a, b) => a + b.length, 0)

  return numbersSum + stringsSum + booleans.length
}



// Iteration #4: Calculate the average
// Level 1: Array of numbers

function averageNumbers(arr) {
  const avg = arr.reduce((a, b) => (a + b), 0) / arr.length

  return arr.length === 0 ? null : avg
}


// Level 2: Array of strings

function averageWordLength(arr) {
  const avg = arr.reduce((a, b) => a + b.length, 0) / arr.length

  return arr.length === 0 ? null : avg
}

// Bonus - Iteration #4.1
function avg(arr) {
  const arrSum = sum(arr)

  return arr.length === 0 ? null : arrSum / arr.length
}

// Iteration #5: Unique arrays

function uniquifyArray(arr) {
  return arr.length === 0 ? null : [...new Set(arr)]
}



// Iteration #6: Find elements

function doesWordExist(arr, word) {
  return arr.length === 0 ? null : arr.includes(word)
}



// Iteration #7: Count repetition

function howManyTimes(arr, word) {
  const timesRepeated = arr.filter(elm => elm === word).length

  return arr.length === 0 ? 0 : timesRepeated
}



// Iteration #8: Bonus

function greatestProduct(matrix) {
  let max = 0
  let result = undefined

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ((j - 3) >= 0) {
        result = matrix[i][j] * matrix[i][j - 1]
          * matrix[i][j - 2]
          * matrix[i][j - 3]
        if (max < result)
          max = result
      }

      if ((i - 3) >= 0) {
        result = matrix[i][j] * matrix[i - 1][j]
          * matrix[i - 2][j]
          * matrix[i - 3][j]

        if (max < result)
          max = result
      }
    }
  }

  return max
}

function greatestProductOfDiagonals(matrix) {
  let max = 0, result

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if ((i - 3) >= 0 && (j - 3) >= 0) {
        result = matrix[i][j] * matrix[i - 1][j - 1]
          * matrix[i - 2][j - 2]
          * matrix[i - 3][j - 3]

        if (max < result)
          max = result
      }

      if ((i - 3) >= 0 && (j - 3) <= 0) {
        result = matrix[i][j] * matrix[i - 1][j + 1]
          * matrix[i - 2][j + 2]
          * matrix[i - 3][j + 3]

        if (max < result)
          max = result
      }
    }
  }

  return max
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct,
    greatestProductOfDiagonals
  }
}

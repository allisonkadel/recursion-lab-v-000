// Code your solution here!

const printString = (str) => {
  console.log(str[0])
  let substr = str.slice(1)
  printString(substr)
}

// print out all the letters in a string

printString('hello')
// console.log(pow(2, 5));

// let pow = function(numeric, powerCount) {
//   return numeric**powerCount
// }

// let pow = (numeric, powerCount) => numeric**powerCount
// console.log(pow(2, 53));

// console.log("test".repeat(3));
// let repeat= (text, repeatCount) => text.repeat(repeatCount)
// console.log(repeat("hello", 3));

// let repeat= (text, repeatCount, err) => {
//   let str = ''
//   for(let i = 0; i<repeatCount; i++){
//     str+=text
//   }
//   return str
// }
// console.log(repeat("hello", 3));

// let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(null).reduce((acc)=>acc+=text, '')

function  pow(x, n) {
  if (n == 1) {
    return x;
  }
  else {
    return x * pow(x, n - 1)
  }
}

pow(2, 4)
/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// TODO) pow(numeric: number, powerCount: number): number;
// * 1.
let pow = function (num, sqr = 0) {
  let result = 1;
  for (let i = 0; i < sqr; i++) {
    result *= num;
  }
  return console.log(result > 9007199254740991 ? BigInt(result) : result);
};

pow(2, 52); // 9007199254740992 (2**53, 반복문으로 만들어볼 것)

// * 2
let pow2 = (num, sqr = 0) => {
  let result = 1;
  for (let i = 0; i < sqr; i++) {
    result *= num;
  }
  return console.log(result > 9007199254740991 ? BigInt(result) : result);
};

pow2(3, 54);

// TODO) repeat(text: string, repeatCount: number): string;
// * 1.
let repeat = function (str, time = 1) {
  let result = "";
  for (let i = 0; i < time; i++) {
    result += str;
  }
  return console.log(result);
};

repeat("Hello", 3); // 'hellohellohello'

// * 2
let repeat2 = (str, time = 1) => {
  let result = "";
  for (let i = 0; i < time; i++) {
    result += str;
  }
  return console.log(result);
};

repeat2("Hello", 4);

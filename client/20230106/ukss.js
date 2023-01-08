// 주제 : arrayMethod.js 실습

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */
let todo = ["밥먹기", "미용실가기", "코딩공부하기"];

const friends = [
  {
    name: "윤보라",
    age: 28,
    job: "작꼬져",
  },
  {
    name: "이로운",
    age: 23,
    job: "배고픈 개발자",
  },
  {
    name: "오승택",
    age: 21,
    job: "물음표살인마",
  },
];

// reduce
// TODO 친구들 나이의 총 합을 구하시오
let age = friends.reduce((acc, cur) => {
  // reduce 사용, acc 누적값, cur.age friends 객체의 age 값
  return acc + cur.age;
}, 0); // 0 을 주어야 숫자형으로 덧셈 계산이 가능함

// console.log(age); // ? 72

let template2 = todo.reduce((acc, cur, index) => {
  // reduce 사용, acc 누적값, HTML 문장 추가
  return /* html */ acc + `<li>할일 ${index + 1} : ${cur}</li> \n`;
}, "");

console.log(template2);
/* 
<li>할일 1 : 밥먹기</li>
<li>할일 2 : 미용실가기</li>
<li>할일 3 : 코딩공부하기</li> 
*/

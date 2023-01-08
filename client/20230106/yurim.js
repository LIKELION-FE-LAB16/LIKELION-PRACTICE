// 배열에서 키가 있는 객체 만들기

/* 
{id:..., name:..., age...} 형식의 users 배열을 받았다고 가정해보자.

그 배열로부터 id를 키로 사용하고, 배열 아이템을 값으로 하는 객체를 생성하는 함수 groupById(arr)를 만들어보자.

이런 함수는 서버 데이터를 다룰 때 매우 편리하게 사용된다.

이 문제에서 id는 고유하다고 가정한다.

array.reduce 메서드 사용하여 문제를 풀어보기
*/

let users = [
  { id: "gildong", name: "Gildong Hong", age: 21 },
  { id: "soonsin", name: "Soonsin Lee", age: 30 },
  { id: "gwansoon", name: "Gwansoon Yu", age: 18 },
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {});
}

let usersById = groupById(users);

console.log(usersById);

// 출력 결과

/*
{
  "gildong": {
      "id": "gildong",
      "name": "Gildong Hong",
      "age": 21
  },
  "soonsin": {
      "id": "soonsin",
      "name": "Soonsin Lee",
      "age": 30
  },
  "gwansoon": {
      "id": "gwansoon",
      "name": "Gwansoon Yu",
      "age": 18
  }
} 
*/

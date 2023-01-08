// reduce 사용해보기

const friends = [
  {
    name: '유재석',
    age: 38,
    job: '개그맨',
  },
  {
    name: '박명수',
    age: 46,
    job: '가수',
  },
  {
    name: '전지현',
    age: 32,
    job: '배우',
  }
];

const ageSum = friends.reduce((accumulator, currentObject) => {
  return accumulator + currentObject.age;
}, 0);

// accumulator, currentObject를 (acc,cur)로 줄여서 써도됨


console.log('나이 합 ', ageSum);

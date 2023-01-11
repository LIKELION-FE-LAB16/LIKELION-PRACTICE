const arr = [10,100,1000,10000]

// forEach
const user = {}

let newArray = arr.forEach((item,index) => {
  console.log(this);
  return "리턴값"
  // this[index] = item
})

console.log(newArray);

arr.sort((a,b)=>{
  return a - b
})

let newArray = arr.map( item => item * 2 )

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]

const find = users.find((item)=>{
  return item.id < 5
})

const findIndex = users.findIndex((item)=>{
  return item.id === 3
})

let result = arr.filter((number)=>{
  return number < 100
})

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];

let age = friends.reduce((acc,cur)=>{
  return acc + cur.age
})

function getNode(node) {
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이여야 합니다.')
  }

  return document.querySelector(node)
}

function getNodes(node) {
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인자는 문자 타입 이여야 합니다.')
  }

  return document.querySelectorAll(node)
}


/* -------------- */


// let test = [1, 2, 3]

// let age = friends.reduce((acc,cur)=>{
//   return acc + cur.age
// }, 0)

/*------------------------------ */

let users = [
  { fiststName: "gildong", lastName: "Hong", age: 21 },
  { fiststName: "soonsin", lastName: "Lee", age: 30 },
  { fiststName: "gwansoon", lastName: "Yu", age: 18 },
];

function groupById(array) {
  return (
    
    array.reduce((acc, cur) => {
    acc[cur.fiststName] = cur;
    return acc;
  }, {})
  
  )
}

let usersById = groupById(users);

console.log(usersById);

//  item["gildong"] = { fiststName: "gildong", lastName: "Hong", age: 21 };

{
  "gildong": { fiststName: "gildong", lastName: "Hong", age: 21 };
}

객체["키"] = 벨류

객체 ={
  키:벨류
}
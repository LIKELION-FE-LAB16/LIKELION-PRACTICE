// 필드를 기준으로 정렬하기

let mackerel = [
  { name: "Amy", age: 31, hometown: "Pacific" },
  { name: "Dori", age: 21, hometown: "Atlantic" },
  { name: "Cillian", age: 11, hometown: "Indian" },
];

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

// console.log(mackerel.sort(byField("name")));
// console.log(mackerel.sort(byField("age")));
// console.log(mackerel.sort(byField("hometown")));

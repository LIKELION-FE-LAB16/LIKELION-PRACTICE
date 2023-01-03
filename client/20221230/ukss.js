// 2022.12.30 (금) LAB16 실습
// 주제 : 국밥

let riceSoup = Number(prompt("국밥의 종류는 몇 가지 인가요 ?", 1));
let menu = [
  {
    id: 1,
    name: "돼지국밥",
    price: 8000,
    info: "돼지 or 살코기",
  },
  {
    id: 2,
    name: "순대국밥",
    price: 8000,
    info: "돼지 + 순대",
  },
  {
    id: 3,
    name: "섞어국밥",
    price: 8000,
    info: "돼지 + 순대 + 내장",
  },
  {
    id: 4,
    name: "내장국밥",
    price: 8000,
    info: "내장 or 내장 + 고기",
  },
  {
    id: 5,
    name: "수육백반",
    price: 10000,
    info: "국 + 수육 + 공기밥",
  },
  {
    id: 6,
    name: "불꽃국밥",
    price: 8000,
    info: "돼지 + 순대 + 우동",
  },
  {
    id: 7,
    name: "우동국밥",
    price: 8500,
    info: "돼지, 순대, 섞어, 내장선택 + 우동",
  },
  {
    id: 8,
    name: "콩나물해장국밥",
    price: 8000,
    info: "콩나물 + 돼지",
  },
  {
    id: 9,
    name: "하이브리드국밥",
    price: 8000,
    info: "볶은고기 + 당면",
  },
  {
    id: 10,
    name: "돼지구리",
    price: 9000,
    info: "돼지 + 라면",
  },
];
let result = "";

for (let i = 0; i < riceSoup; i++) {
  result += `
  Name: ${menu[i].name} 
  Title: ${menu[i].price} 
  Info: ${menu[i].info} 
  `;
}
console.log(result);

// * 20230105
// * 주제 : 고등어

let market = {
  mackerel: [
    {
      name: "순이네",
      price: 32000,
      cnt: 3,
      date: new Date("2022-12-30"),
    },
    {
      name: "맹구네",
      price: 33000,
      cnt: 2,
      date: new Date("2023-01-02"),
    },
    {
      name: "철구네",
      price: 31800,
      cnt: 5,
      date: new Date("2022-12-29"),
    },
    {
      name: "옥분이네",
      price: 31000,
      cnt: 4,
      date: new Date("2022-12-25"),
    },
    {
      name: "순자네",
      price: 34000,
      cnt: 5,
      date: new Date("2023-01-05"),
    },
  ],

  totalPrice(index) {
    return this.mackerel[index].reduce((acc, cur) => acc + cur.price * cur.cnt, 0);
  },

  getItem(index) {
    return this.mackerel[index];
  },
  addItem(newItem) {
    this.mackerel.push(newItem);
  },
};

let want = prompt(
  `
고등어 판매처 조회 \n
0 : 순이네 조회 \n
1 : 맹구네 조회 \n
2 : 철구네 조회 \n
3 : 옥분이네 조회 \n
4 : 순자네 조회 \n
5 : 꽃분이네 조회
`,
  0
);

console.log(market.getItem(want));
// console.log(market.totalPrice(want));

market.addItem({
  name: "꽃분이네",
  price: 31000,
  cnt: 7,
  date: new Date("2022-12-23"),
});

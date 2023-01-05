function 고등어빵() {
  let 팥 = {
    수량: 3,
  };
  let 초코 = {
    수량: 5,
  };
  let 슈크림 = {
    수량: 10,
  };

  let 이름 = {
    팥등어: 팥,
    초코등어: 초코,
    슈등어: 슈크림,
  };
  function 개수(t) {
    이름[t].수량 -= 1;
    console.log(이름[t]);
  }

  return 개수;
}

const 주문 = 고등어빵();

console.log(주문("팥등어"));

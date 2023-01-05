/* 고등어 */

function 바다() {
  let 고기1 = {
    이름: '고등어',
    특징: '삼치, 참치 등과 같은 과에 속하는 대표적인 등푸른 생선 중 하나이다. ~~~',
  };
  let 고기2 = {
    이름: '연어',
    특징: '연어(鰱魚)는 연어속에 속하는 물고기이다. ~~~~',
  }
  let 고기3 = {
    이름: '삼치',
    특징: '고등어과 바닷물고기. 고등어보다 좀더 크고 날렵하게 생겼다. ~~~'
  }
  let 고기종류 = [고기1, 고기2, 고기3]

  return function () {
    let idx = Math.floor(Math.random()*고기종류.length)
    console.log(`index = ${idx} `);
    return 고기종류[idx]
  }
}

const 낚시 = 바다() //클로저 함수
const 낚은고기 = 낚시()

console.log(낚은고기);

/* ------------------------------------- */

낚은고기.이름 = '참치'
낚은고기.특징 = '맛없어~~'

console.log(낚은고기);

console.log(바다);
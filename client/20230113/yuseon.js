const xhr = new XMLHttpRequest();
// console.log(xhr);

// // 비동기 통신의 시작을 알림
// // method,url
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

// /* readyState
// 0: uninitalized  초기화
// 1: loading  로딩중
// 2: loaded  로딩완료
// 3:interative  인터렉티브
// 4:complete  완료
//  */

// // 상태값 변경시 마다 이벤트 호출하여 상태확인
// console.log(xhr.readyState); -- 1

// xhr.addEventListener("readystatechange", () => {
//   // console.log(xhr.status);  // 404/202
//   // console.log(xhr.readyState); // 1,2,3,4

//   // 200~300 즉 , 에러가 아닌경우만 실행
//   if (xhr.status >= 200 && xhr.status < 400) {
//     // 완료 상태 일때만 한번 실행
//     if (xhr.readyState === 4) {
//       console.log("통신 성공");

//       // 문자형 데이터 객체화
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.error("통신 실패");
//   }
// });

// 서버에 요청을 보냄
// post는 send에 데이터를 같이 넣어 보내야함
xhr.send(JSON.stringify());

// console.log(xhr);

// 함수형 만들기
export function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  onFail = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  // const { method, url, body } = options;

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  // key, value header 값 세팅
  xhr.setRequestHeader("name", "seon");

  // entries - 스태틱메서드: 객체를 배열로 반환

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr; // 객체 구조 분해 할당

    if (status >= 200 && status < 400) {
      if (readyState === 4) {
        console.log("통신 성공");
        onSuccess(JSON.parse(response));
      }
    } else {
      // console.error("통신 실패");
      onFail("통신 실패");
    }
  });
  xhr.send(JSON.stringify(body));
}

xhrData({
  url: "https://jsonplaceholder.typicode.com/users",
  onSuccess: (result) => {
    console.log(result);
  },
  onFail: (error) => {
    console.error(error);
  },
});

// 함수도 객체라서 메서드 추가(함수안에 메서드)

xhrData.get = (url, onSuccess, onFail) => {
  // shorthand property
  xhrData({
    url,
    onSuccess,
    onFail,
  });
};

xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    body,
    url,
    onSuccess,
    onFail,
  });
};

// xhrData.put = (url, body, onSuccess, onFail) => {
//   xhrData({
//     method: "PUT",
//     body,
//     url,
//     onSuccess,
//     onFail,
//   });
// };

// xhrData.delete = (url, onSuccess, onFail) => {
//   xhrData({
//     method: "DELETE",
//     url,
//     onSuccess,
//     onFail,
//   });
// };

xhrData.get(
  "https://jsonplaceholder.typicode.com/users",
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

console.dir(xhrData);
xhrData("POST", "https://jsonplaceholder.typicode.com/users", {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
});

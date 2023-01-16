# 20230116

> 주제 : 멘토링 진행 (17:25 ~ 17:50)

## 1. 오늘 배운 메모이제이션 패턴을 배웠는데 이해가 되지 않아 다시 한번 설명을 해주실 수 있는지 여쭤봅니다.

**메모이제이션**(memoization)은 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술이다. 동적 계획법의 핵심이 되는 기술이다.

즉, 동일한 계산의 반복 수행을 제거하여 **프로그램 실행 속도를 빠르게 하는 기술**이다.

## 2. 스크롤 프로퍼티에 관해서 궁금합니다

`recordListWrapper.scrollTop = recordListWrapper.scrollHeight`

**scrollTop**
원글 맨 처음부터 ~ 현재 화면에 보이는 부분까지의 길이를 의미함

**scrollHeight**
원글이 너무 길어서 화면 밖으로 삐져나갔을 경우, 화면 밖으로 삐져나간 부분까지 포함한 전체 글의 길이를 의미함

즉, 현재 화면에 보이는 부분까지의 길이와 전체 글의 길이가 같으므로 일정한 길이가 유지되며, 화면 밖으로 삐져나가는 부분은 hidden 으로 처리된다고 볼 수 있다.

## 3. JS Doc 에 관해서 여쭤보고 싶습니다.

```js
/**
 * @function isElement checkElement
 * @param {HTMLElement} node
 * @return set disabled
 */
```

**JSDoc**
JavaScript 소스코드 파일에 주석을 달기 위해 사용되는 마크업 언어
JSDoc 에 포함하는 주석을 사용하여 코드를 작성하고 인터페이스를 설명하는 문서를 생성할 수 있다.

## 질문하지 못했던 질문들

### 4. getattribute setattribute 차이 아직도 잘 모르겠어서 다시한번 더 여쭙고 싶습니다.

-

### 5. memo.js가 모듈이라서 cache를 함수 밖으로 빼서 구현해봤는데요. 궁금한점은 클로저로 구현할지 모듈로 구현할지는 취향차이인지 그 둘 사이에 명확한 차이점이 있는지 궁금합니다

```js
const cache = {};

export const memo = (key, callback) => {
  if (!callback) {
    return cache[key];
  }

  if (cache[key]) {
    console.warn(`${key} 값은 이미 캐시된 값이 존재합니다.`);
    return;
  }

  cache[key] = callback();
};
```

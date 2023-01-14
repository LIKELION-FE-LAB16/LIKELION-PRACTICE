// TODO 주접 생성기 제작

import { jujeobData } from "./data/data.js";
import { clearContents, getInputValue, getNode, getRandom, insertLast, isNumericString, showAlert } from "./lib/index.js";

const submit = getNode("#submit"); // ID submit 선택
const resultArea = getNode(".result"); // class result 선택

function clickSubmitHandler(e) {
  e.preventDefault(); // "클릭" 이벤트가 실행되면 새로 실행하고 싶지 않게 하려고 선언
  let name = getInputValue("#nameField"); // ID nameField 에 입력된 값을 name 에 주입

  if (!name) {
    // name 값이 없을 경우 해당 경고창 실행
    showAlert(".alert", "이름을 입력해주세요", 3000);
    return;
  }

  if (isNumericString(name)) {
    // name 값이 숫자형일 경우 해당 경고창 실행
    showAlert(".alert", "제대로된 이름을 입력해주세요", 3000);
    return;
  }

  let list = jujeobData(name); // jujeobData 에 name 값 입력한 값을 list 에 주입
  let pick = list[getRandom(list.length - 1)]; // list[랜덤값]

  clearContents(resultArea); // 기존 resultArea 값 삭제
  insertLast(resultArea, pick); // pick 값 입력
}

submit.addEventListener("click", clickSubmitHandler);
// submit 버튼을 "클릭" 하면 clickSubmitHandler() 실행

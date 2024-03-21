window.addEventListener("load", function () {
  clearMessages();

  var formElem = document.querySelector("form");
  // addEventListener 말고 이렇게 등록하는 방법도 있음.
  // addEventListener는 여러 개 리스너 등록 가능. 아래 방식은 한 개만 등록 가능
  // addEventListener는 리스너를 호출만 해줄 뿐이지 리스너의 return 값이 로직에 영향 없음.
  // 하지만 대입 연산자로 리스너 등록할 경우에는 리스너가 리턴하는 값을 받아서 처리한다는 성질 생김.
  formElem.onsubmit = submitForm;

  // add month
  var selectInput = document.querySelector('select[name="birth-month"]');
  for (let i = 1; i <= 12; i++) {
    var option = document.createElement("option");
    option.innerText = `${i}월`;
    option.value = i;
    selectInput.appendChild(option);
  }
});

function clearMessages() {
  var messages = document.getElementsByClassName("alert-message");
  for (let i = 0; i < messages.length; i++) {
    messages[i].style.display = "none";
  }
}

function showMessage(inputElement, message) {
  var messageElem = inputElement.parentNode.querySelector("span");
  messageElem.style.display = "inline";
  messageElem.innerText = message;
  inputElement.focus();
}

function submitForm() {
  // account info
  var accountInput = document.querySelector('input[name="account"]');
  var passwordInput = document.querySelector('input[name="password"]');
  var passwordConfirmInput = document.querySelector(
    'input[name="password-confirm"]'
  );

  // select, radio, checkbox
  var selectInput = document.querySelector('select[name="birth-month"]');
  var radioInput = document.querySelector('input[name="gender"]:checked');
  var checkInfo = document.querySelector('input[name="agree"]');

  console.log(accountInput.value);
  console.log(passwordInput.value);
  console.log(passwordConfirmInput.value);
  console.log(selectInput.value);
  console.log(radioInput.value);
  console.log(checkInfo.value);

  //validation
  var success = false;
  if (accountInput.value.length < 6) {
    showMessage(accountInput, "계정은 6자리 이상이어야 합니다.");
    sucecess = false;
  }

  if (passwordInput.value.length < 10) {
    showMessage(passwordInput, "비밀번호는 10자리 이상이어야 합니다.");
    sucecess = false;
  }

  if (passwordConfirmInput.value !== passwordInput.value) {
    showMessage(passwordConfirmInput, "비밀번호를 동일하게 입력해주세요");
    sucecess = false;
  }

  return success;
}

// 추가 공부
/**
 * submitForm에서 return false를 하고 안 하고는 무슨 차이지?
 */

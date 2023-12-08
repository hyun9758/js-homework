const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

// 1. email 정규표현식을 사용한 validation

if (emailReg(user.id)) {
  console.log("유효한 이메일 주소입니다.");
} else {
  console.log("유효하지 않은 이메일 주소입니다.");
}

// 2. pw 정규표현식을 사용한 validation

if (pwReg(user.pw)) {
  console.log("유효한 비밀번호입니다.");
} else {
  console.log("유효하지 않은 비밀번호입니다.");
}

// 3. 상태 변수 관리

let isLoggedin = false; // 초깃값은 로그아웃 상태

// 로그인 상태 변경 함수
function checkLoginState() {
  return isLoggedin;
}

// 로그인 상태 확인 함수
const currentState = checkLoginState();
console.log(`현재 로그인 상태 : ${currentState}`);

// 4. 로그인 버튼을 클릭시 조건처리

function loginButtonClick(email, password) {
  if (!emailReg(email) | !pwReg(password)) {
    console.log("유효하지 않은 이메일 주소 또는 비밀번호입니다.");
    return;
  }

  checkLoginState(true);
  console.log("로그인 성공!");
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

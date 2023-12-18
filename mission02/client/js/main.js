/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

1. 클릭한 대상 is-active 클래스 넣기
2. 클릭한 대상의 정보 가져오기
3. 가져온 정보로 이미지 바꾸기
4. 가져온 정보로 텍스트 바꾸기
5. 가져온 정보로 오디오 바꾸기
*/

const nav = document.querySelector(".nav"); // 이벤트 위임
const list = document.querySelectorAll(".nav li");
const visual = document.querySelector(".visual img"); // 소스값, alt 값 잡기 위해서
const body = document.querySelector("body");
const nickName = document.querySelector(".nickName");

const audio = [
  new AudioPlayer("./assets/audio/ember.m4a"),
  new AudioPlayer("./assets/audio/wade.m4a"),
  new AudioPlayer("./assets/audio/clod.m4a"),
  new AudioPlayer("./assets/audio/gale.m4a"),
];

function setAudio(index) {
  if (audio[index].isPlaying()) return;

  audio.forEach((sound) => sound.pause());
  audio[index].play();
}

function handleClick(e) {
  e.preventDefault(); // 디폴트값을 실행 X

  const li = e.target.closest("li"); //가장 가까운 li 태그 가져오기

  if (!li) return;

  list.forEach((item) => item.classList.remove("is-active"));

  li.classList.add("is-active"); // 클릭할 때마다 is-active 추가

  //

  const index = li.dataset.index - 1; // 클릭한 부분의 html의 data-index 값 가져오기

  // 이미지

  const imageAlt = data[index].alt;
  const imageSource = `./assets/${data[index].name.toLowerCase()}.jpeg`;

  // 잡아온 값 visual에 넣어주기
  visual.src = imageSource;
  visual.alt = imageAlt;

  // 배경색
  const backgroundSource = `linear-gradient(to bottom, ${data[index].color[0]}, 
    ${data[index].color[1]})`;

  body.style.background = backgroundSource;

  // 텍스트
  const nameText = data[index].name;

  nickName.textContent = nameText;

  // 오디오

  setAudio(index);
}

nav.addEventListener("click", handleClick);

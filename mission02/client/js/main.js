/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

const nav = document.querySelector(".nav");

function handleClick(e) {
  const target = e.target;
  const li = target.closest("li");

  if (!li) return;

  const index = li.dataset.index;

  document.body.style.background = `linear-gradient(to bottom, ${
    data[index].color[0]
  }, ${data[index - 1].color[0]}, ${data[index - 1].color[1]})`;
}

nav.addEventListener("click", handleClick);

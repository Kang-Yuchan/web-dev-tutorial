// 클릭 이벤트와 데이트 객체를 이용한 시계
const btn = document.querySelector('#js_btn');
const span = document.querySelector('#js_span');

console.log(span)

btn.addEventListener('click', () => {
  btn.style.backgroundColor = 'red';
})

function clock() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  
  span.innerHTML = `${hours}:${minutes}:${seconds}`;
}


setInterval(() =>{
  clock();
}, 1000)

// 가위 바위 보
function rspGame() {
  while (true) {
    const rspArr = ['가위', '바위', '보'];
    const randomNum = Math.floor(Math.random() * 3);
    const computerVal = rspArr[randomNum];

    var msg;
    console.log(msg)
    const val = prompt(msg ? msg : '이 몸과의 가위바위보를 하자꾸나');
    const win = computerVal === '가위' && val === '바위' || computerVal === '바위' && val === '보' || computerVal === '보' && val === '가위';
    const lose = computerVal === '가위' && val === '보'|| computerVal === '바위' && val === '가위' || computerVal === '보' && val === '바위';
    const draw = computerVal === val;
  
    if (win) {
      alert('나니? 내가.. 지다니.. 이번엔 눈감아 주마..')
      break
    } else if(lose) {
      msg = '이렇게 포기할건가? 한번 더 해보거라 애송이'
      alert('나의 승리로구나.')
      continue
    } else if (draw) {
      msg = '아직 승부는 끝나지않았다! 와라 애송이!!'
      alert('무승부로구나.')
      continue
    } else {
      alert('내 제안을 거절해? 죽어라 애송이!')
      break
    }
  }
}

rspGame();

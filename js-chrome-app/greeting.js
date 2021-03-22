const form = document.querySelector(".js-form"),
//문서 전체(document)에서 class가 js-form인 요소를 변수 form에 저장
    input = form.querySelector("input"),
    //form(문서 전체 중 class가 js-form인 요소)에서 input 태그를 변수 input에 저장
    greeting = document.querySelector(".js-greetings");
    //문서 전체(document)에서 class가 js-greetings인 요소를 변수 greeting에 저장
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    //input에 입력된 값을 currentValue에 저장
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    //form에 SHOWING_CN을 추가한다 - 추가 시 class에 showing이 추가되고 설정된 display: block이 실행 - input박스 나타남
    form.addEventListener("submit", handleSubmit)
    //submit event 작동 시 handleSubmit 함수를 실행
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    //SHOWING_CN 제거 - class에서 showing이 사라짐 - input박스 사라짐
    greeting.classList.add(SHOWING_CN);
    //greeting이 나타나게 함
    greeting.innerText = `Hello, ${text}!`;
    //paintGreeting이 받은 text(인자)를 포함한 요소를 innerText로 넣음
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    //localStorage에서 USER_LS요소를 getItem(찾는다? 가져온다?)
    if (currentUser === null) {
        askForName();
        //조건문 currentUser가 null(값 없음)이라면 askForName 함수를 실행한다
    }
    else {
        paintGreeting(currentUser);
        //currentUser가 null이 아니라면 paintGreeting에 currentUser를 입력해서 실행한다.
    }
}

function init() {
    loadName();
    //init 함수 실행시 loadName 함수 실행
}

init();
//init 함수를 실행
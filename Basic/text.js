// alert("테스트!");
//변수 let, var
let m = "메세지";
let n = 77;
console.log("변수 m:" + m);
console.log("변수 n:" + n);
var x = "var변수";
var x = "재선언";
console.log("x: " + x);

//상수 변하는 않는 값
// const hens = 4;
// hens = 20; //error 

// const age = 17;
// age = age + 1; //error

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

let color = COLOR_ORANGE;
alert(color);

//문자형 한따옴표 또는 쌍따옴표면 문자열이다.
let s1 = "헬로우";
let s2 = '한따옴표 문자열';
//리터럴 템플릿 문자열은 벡틱 (왼쪽 숫자1 옆 따옴표) ````
let s3 = `문자열인데 대입가능 ${s1} ${s2}` //StringBuilder 같은 역할 문자열 연결
console.log(s3);

//대화상자함수 alert , prompt
let 나이 = prompt("나이를 입력해주세요", 100);
alert(`당신의 나이는 ${나이}살 입니다.`);

let result = prompt("오늘 점심은");
console.log(result);

//확인버튼 true 취소 false
confirm

//삼항 조건 연산자

let accessAllowed;
let age = prompt('나이를 입력해 주세요.', '');

// if(age > 18){
//     accessAllowed = true;
// }else{
//     accessAllowed = false;
// }
// alert(accessAllowed);
accessAllowed = (age > 18) ? true : false;

for(let i = 0; i <= 100; i++){
    
}
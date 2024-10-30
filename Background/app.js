// alert('test');
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#gradient");
const h3 = document.querySelector("h3");

// const setColor = () => {
//     body.style.background = `linear-gradient(to right, ${color1.value} , ${color2.value})`;
// };

//두개의 컬러입력에 이벤트 달기
color1.addEventListener("input", setColor); //callBack 함수는 이름만 적음 ()x 
color2.addEventListener("input", setColor);
  
function setColor(){
    body.style.background = `linear-gradient(to left, ${color1.value} , ${color2.value})`;
    h3.textContent = body.style.background + ";";
}

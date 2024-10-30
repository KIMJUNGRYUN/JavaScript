let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerDisplay = document.querySelector('.timerDisplay');
let timer = null;

//멈춤 버튼 클릭
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(timer);
});

//리셋 버튼 클릭
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerDisplay.textContent = `00 : 00 : 00 : 000`;
});

//시작버튼 이벤트
document.getElementById('startTimer').addEventListener('click',() => {
   if(timer != null){ 
    clearInterval(timer);
   }
    //클릭하면 타이머를 실행 문제: 클릭할대마다 빠르게 10초가 흘러감
     timer = setInterval(displayTimer, 10); //10ms 마다 함수 실행
});

function displayTimer(){
    //10ms에 한번씩 실행하여 10ms씩 더함
    milliseconds += 10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    timerDisplay.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
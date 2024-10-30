
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const stopbtn = document.getElementById("stop");

//stop 버튼 누르면 timer 멈춤
stopbtn.addEventListener('click', () =>{
    clearInterval(timer);
})

// setInterval(함수, 시간) 주기적으로 시간뒤에 함수를 실행
const timer = setInterval(() => {
    const date_now =new Date(); //현재 날짜시간을 생성
    console.log(date_now);

    let hr = date_now.getHours();
    let min = date_now.getMinutes();
    let sec = date_now.getSeconds();

    //10보다 작은 숫자는 앞에 0을 붙여줌
    if(hr < 10){
        hr = "0" + hr;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }
    hour.textContent = hr;
    minute.textContent = min;
    seconds.textContent = sec;
}, 1000);

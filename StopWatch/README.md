# JavaScript 스톱워치 

이 프로젝트는 JavaScript를 사용하여 초, 분, 시간, 밀리초 단위의 스톱워치를 구현한 웹 애플리케이션입니다. "시작", "멈춤", "리셋" 버튼을 통해 타이머를 제어할 수 있습니다.

---

## 목차

1. [기능 개요](#기능-개요)
2. [파일 설명](#파일-설명)
3. [코드 설명](#코드-설명)


---

### 기능 개요

- **시작**: 타이머를 시작하고, 10밀리초 단위로 시간이 업데이트됩니다.
- **멈춤**: 현재 시간에서 타이머를 일시 정지합니다.
- **리셋**: 타이머를 초기화하고, 시간 표시를 "00 : 00 : 00 : 000"으로 리셋합니다.

### 파일 설명

- **index.html**: HTML 파일로, 타이머 디스플레이와 제어 버튼을 정의합니다.
- **style.css**: 스톱워치의 스타일을 지정하여, 화면 중앙에 배치하고 버튼과 타이머에 스타일을 적용합니다.
- **app.js**: JavaScript 파일로, 타이머 시작, 정지, 리셋 로직을 구현합니다.

### 코드 설명

1. **JavaScript 코드 설명 (app.js)**

   ```javascript
   let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
   let timerDisplay = document.querySelector('.timerDisplay');
   let timer = null;
<hr>

2. **멈춤 버튼 이벤트**
```
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(timer);
});
```
- 멈춤 버튼: pauseTimer 버튼을 누르면 clearInterval 함수가 호출되어 timer 변수를 초기화하여 타이머가 일시 정지됩니다.
  <hr>

3. **리셋 버튼 이벤트**
```
document.getElementById('resetTimer').addEventListener('click', () => {
    clearInterval(timer);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerDisplay.textContent = `00 : 00 : 00 : 000`;
});
```
### 리셋 버튼
- resetTimer 버튼을 누르면 타이머를 초기화하고, [milliseconds, seconds, minutes, hours]를 모두 0으로 설정하여 시간을 리셋합니다.
### 화면 업데이트
- 초기화된 시간을 timerDisplay에 표시하여 화면에 "00 : 00 : 00 : 000"으로 업데이트합니다.
<hr>

4. **시작 버튼 이벤트***
```
document.getElementById('startTimer').addEventListener('click', () => {
    if(timer != null){ 
        clearInterval(timer);
    }
    timer = setInterval(displayTimer, 10);
});
```
### 시작 버튼
- startTimer 버튼을 누르면 setInterval을 통해 displayTimer 함수가 10밀리초마다 실행됩니다.
### 중복 실행 방지
- timer 변수가 null이 아닌 경우, clearInterval(timer)로 기존 타이머를 정지하여 중복 실행을 방지합니다.
 <hr>

5. **타이머 업데이트 함수 (displayTimer)**
```
function displayTimer(){
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
```
### 시간 업데이트 로직
- milliseconds가 1000 밀리초가 되면 1초가 증가하고, seconds가 60이 되면 1분이 증가합니다. 이 과정을 hours까지 반복하여 시간 정보를 업데이트합니다.
### 두 자리 표시
- 시간이 한 자리 숫자일 경우 앞에 0을 붙여 두 자리로 맞춥니다.
### 화면 업데이트
- timerDisplay의 innerHTML을 통해 타이머 화면을 실시간으로 업데이트합니다.

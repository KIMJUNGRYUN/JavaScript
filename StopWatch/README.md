# JavaScript 스톱워치 애플리케이션

이 프로젝트는 JavaScript를 사용하여 초, 분, 시간, 밀리초 단위의 스톱워치를 구현한 웹 애플리케이션입니다. "시작", "멈춤", "리셋" 버튼을 통해 타이머를 제어할 수 있습니다.

---

## 목차

1. [기능 개요](#기능-개요)
2. [파일 설명](#파일-설명)
3. [코드 설명](#코드-설명)
4. [실행 방법](#실행-방법)

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
   
2. **멈춤 버튼 이벤트**
```
document.getElementById('pauseTimer').addEventListener('click', () => {
    clearInterval(timer);
});
```
- 멈춤 버튼: pauseTimer 버튼을 누르면 clearInterval 함수가 호출되어 timer 변수를 초기화하여 타이머가 일시 정지됩니다.

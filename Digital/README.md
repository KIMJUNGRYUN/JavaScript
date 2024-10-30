# JavaScript 디지털 시계

이 프로젝트는 JavaScript를 사용하여 실시간으로 시간을 업데이트하는 디지털 시계를 구현한 간단한 웹 애플리케이션입니다. 초 단위로 시간이 갱신되며, **"멈춤"** 버튼을 눌러 타이머를 일시 정지할 수 있습니다.

---

## 목차

1. [기능 개요](#기능-개요)
2. [파일 설명](#파일-설명)
3. [코드 설명](#코드-설명)
4. [실행 방법](#실행-방법)

---

### 기능 개요

- 실시간 시계를 구현하여, 시각이 매 초마다 업데이트됩니다.
- **"멈춤"** 버튼을 클릭하면 시간 업데이트가 멈추며, 다시 시작하기 위해서는 페이지를 새로고침해야 합니다.

### 파일 설명

- **index.html**: HTML 파일로, 시계의 기본 구조를 정의합니다. 시간 표시 요소와 "멈춤" 버튼이 포함되어 있습니다.
- **style.css**: 시계의 UI 스타일을 정의하여 화면 중앙에 배치하고, 시각 표시 영역의 배경과 폰트 스타일을 설정합니다.
- **app.js**: JavaScript 파일로, 현재 시간을 초 단위로 업데이트하고, 멈춤 버튼 클릭 시 타이머를 중지하는 기능을 구현합니다.

### 코드 설명

1. **HTML 구조**
   - `<div class="clock">` 내에서 시(hour), 분(minute), 초(seconds) 각각을 나타내는 `<div>` 요소와 "멈춤" 버튼을 포함합니다.
   - `id` 속성으로 각각의 시간 요소(`hour`, `minute`, `seconds`)와 버튼(`stop`)에 접근할 수 있습니다.

2. **CSS (style.css)**
   - `background` 속성으로 페이지 배경을 그라데이션으로 설정합니다.
   - 시계의 각 숫자 표시 칸에 배경, 텍스트 스타일, 그림자 효과를 적용하여 시각적으로 명확하게 표시됩니다.
   - `transform`과 `position` 속성으로 시계가 화면 중앙에 고정되도록 설정합니다.

3. **JavaScript (app.js)**

   ```javascript
   const hour = document.getElementById("hour");
   const minute = document.getElementById("minute");
   const seconds = document.getElementById("seconds");
   const stopbtn = document.getElementById("stop");

   stopbtn.addEventListener('click', () => {
       clearInterval(timer);
   });

   const timer = setInterval(() => {
       const date_now = new Date();
       let hr = date_now.getHours();
       let min = date_now.getMinutes();
       let sec = date_now.getSeconds();

       if (hr < 10) hr = "0" + hr;
       if (min < 10) min = "0" + min;
       if (sec < 10) sec = "0" + sec;

       hour.textContent = hr;
       minute.textContent = min;
       seconds.textContent = sec;
   }, 1000);
### 중요 포인트:
- setInterval() 함수로 매 초마다 현재 시간을 갱신합니다.
- 시간, 분, 초가 한 자리 숫자일 때 앞에 0을 추가하여 2자리로 표시합니다.
- "멈춤" 버튼 클릭 시 clearInterval() 함수를 호출하여 시계가 멈추도록 합니다.

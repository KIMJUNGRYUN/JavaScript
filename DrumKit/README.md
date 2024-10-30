# JavaScript 드럼 키트

이 프로젝트는 JavaScript를 이용하여 키보드나 버튼 클릭으로 드럼 소리를 재생할 수 있는 웹 드럼 키트입니다. 각각의 버튼 또는 키를 누르면 대응하는 드럼 소리가 재생되며, 시각적인 애니메이션 효과도 추가됩니다.

---

## 목차

1. [기능 개요](#기능-개요)
2. [파일 설명](#파일-설명)
3. [코드 설명](#코드-설명)


---

### 기능 개요

- 키보드의 특정 키 또는 화면의 버튼을 클릭하면 드럼 사운드가 재생됩니다.
- 사운드와 함께 버튼에 애니메이션 효과가 적용되어 시각적 피드백을 제공합니다.
- 상단 제목을 클릭 시 텍스트 색상이 변하는 간단한 시각적 효과가 추가됩니다.

### 파일 설명

- **index.html**: 드럼 키트의 HTML 구조를 정의하며, 드럼 버튼과 타이틀 요소가 포함되어 있습니다.
- **styles.css**: 드럼 키트의 스타일을 지정하여 각 드럼 버튼에 이미지를 입히고, 애니메이션 효과와 기본 색상을 설정합니다.
- **app.js**: JavaScript 파일로, 버튼과 키보드 이벤트를 관리하고 드럼 소리를 재생하는 로직이 구현되어 있습니다.

### 코드 설명

1. **HTML 구조**
   - `h1#title` 요소는 드럼 키트의 제목을 표시하며, 클릭 시 색상이 변경됩니다.
   - `.set` 클래스 내의 버튼들은 각각 드럼 소리를 재생하는 키(`w`, `a`, `s`, `d`, `j`, `k`, `l`)에 대응됩니다.

2. **CSS (styles.css)**
   - 각 드럼 키에 개별 이미지를 배경으로 설정하여 직관적인 UI를 제공합니다.
   - `.pressed` 클래스가 추가되면 버튼에 그림자와 투명도가 적용되며, 짧은 시간 후 효과가 제거되어 애니메이션 효과를 제공합니다.
   - 배경 색상과 글꼴 색상, 텍스트 그림자 등을 설정하여 심플하고 세련된 스타일을 제공합니다.

3. **JavaScript (app.js)**

   ```javascript
   // 오디오 파일 경로를 저장한 객체
   const audioFiles = {
       w: "sounds/tom-1.mp3",
       a: "sounds/tom-2.mp3",
       s: "sounds/tom-3.mp3",
       d: "sounds/tom-4.mp3",
       j: "sounds/snare.mp3",
       k: "sounds/crash.mp3",
       l: "sounds/kick-bass.mp3",
   };

   let heading = document.getElementById("title");
   heading.onclick = function(){
       heading.style.color = 'skyblue';
       heading.style.textShadow = "12px 14px 22px";
   };

   const btn = document.querySelectorAll(".set");

   for (let i = 0; i < btn.length; i++) {
       btn[i].addEventListener("click", (e) => {
           const buttonText = e.target.textContent;
           playSound(buttonText);
           animateButton(buttonText);
       });
   }

   function playSound(key) {
       const audioFile = audioFiles[key.toLowerCase()];
       if (audioFile) {
           new Audio(audioFile).play();
       }
   }

   function animateButton(key) {
       const button = document.querySelector("." + key.toLowerCase());
       if (button) {
           button.classList.add("pressed");
           setTimeout(() => button.classList.remove("pressed"), 100);
       }
   }

   document.addEventListener("keydown", (e) => {
       playSound(e.key);
       animateButton(e.key);
   });
### 중요 포인트:
- 오디오 파일 경로 객체 (audioFiles): 각 키에 대한 드럼 사운드 파일 경로를 정의하여 코드를 효율적으로 관리합니다.
- playSound 함수: 클릭된 버튼 또는 눌린 키에 해당하는 사운드 파일을 찾아 재생합니다.
- animateButton 함수: 버튼에 pressed 클래스를 일시적으로 추가하여 시각적인 애니메이션 효과를 줍니다.
- 키보드 이벤트와 클릭 이벤트 등록: 키보드로 드럼 키를 누르거나, 버튼을 클릭할 때 동일한 사운드와 애니메이션 효과를 실행하도록 설정합니다.


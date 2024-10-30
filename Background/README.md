# JavaScript 배경 색상 그라데이션 생성기

이 프로젝트는 JavaScript를 사용하여 두 가지 색상을 선택하고, 선택한 색상에 따라 배경 그라데이션을 실시간으로 설정할 수 있는 간단한 웹 애플리케이션입니다. 사용자가 색상을 변경할 때마다 배경이 자동으로 업데이트되고, 현재의 CSS 배경 정보를 화면에 표시합니다.

---

## 목차

1. [기능 개요](#기능-개요)
2. [파일 설명](#파일-설명)
3. [코드 설명](#코드-설명)

---

### 기능 개요

- 사용자가 두 가지 색상을 선택하면 선택된 색상으로 배경 그라데이션을 생성하고 화면에 CSS 코드 형태로 표시합니다.
- `input` 이벤트 리스너를 통해 색상 선택이 변경될 때마다 자동으로 `linear-gradient` 배경을 업데이트합니다.

### 파일 설명

- **index.html**: HTML 구조를 정의하며, 색상 선택을 위한 두 개의 `input` 요소, 배경 설명을 위한 `h3` 요소가 포함되어 있습니다.
- **style.css**: 기본 배경 색상과 텍스트 스타일을 정의하여 UI의 일관성을 유지합니다.
- **app.js**: JavaScript 파일로, 사용자의 색상 입력을 받아 배경을 동적으로 변경하는 기능을 구현합니다.

### 코드 설명

1. **HTML 구조**
   - 두 개의 색상 선택기 `<input type="color">`를 통해 색상을 선택합니다.
   - `<h3>` 요소는 배경 CSS 값을 표시하여, 사용자가 현재 적용된 그라데이션의 CSS 코드를 쉽게 확인할 수 있습니다.

2. **CSS (style.css)**
   - `body`에 기본 배경 그라데이션을 설정하고, `h1`과 `h3` 스타일을 지정하여 전체적인 텍스트 스타일을 통일합니다.

3. **JavaScript (app.js)**

   ```javascript
   const color1 = document.querySelector(".color1");
   const color2 = document.querySelector(".color2");
   const body = document.querySelector("#gradient");
   const h3 = document.querySelector("h3");

   color1.addEventListener("input", setColor);
   color2.addEventListener("input", setColor);

   function setColor(){
       body.style.background = `linear-gradient(to left, ${color1.value} , ${color2.value})`;
       h3.textContent = body.style.background + ";";
   }
### 중요 포인트:
- addEventListener("input", setColor): 사용자가 색상을 선택할 때마다 setColor 함수가 호출되도록 설정합니다. 콜백 함수는 함수명만 작성하며, 괄호 ()를 사용하지 않는 점을 유의합니다.
- setColor 함수:
선택한 두 색상을 사용하여 linear-gradient 스타일을 생성하고 body 배경에 적용합니다.
- h3.textContent를 통해 현재 적용된 CSS 코드를 화면에 표시하여, 사용자가 선택한 배경을 CSS로 복사할 수 있도록 합니다.

# 자바스크립트 간단히 공부하기

JavaScript의 기본 개념과 문법을 쉽게 익힐 수 있도록 요약한 나의 자료입니다.

---

## 목차

1. [변수와 상수](#변수와-상수)
2. [자료형과 연산](#자료형과-연산)
3. [대화상자 함수](#대화상자-함수)
4. [형 변환](#형-변환)
5. [비교 연산자](#비교-연산자)
6. [논리 연산자](#논리-연산자)
7. [반복문](#반복문)
8. [조건문](#조건문)

---

### 변수와 상수

- **`let`**: 변수 선언 (재할당 가능)
- **`var`**: 과거에 사용되던 변수 선언 (범위 제한이 느슨함)
- **`const`**: 상수 선언 (재할당 불가)

```javascript
let age = 25;
var name = "Alice";
const pi = 3.14;
```

### 자료형과 연산

- **`typeof`** 연산자: 변수의 자료형 확인
- 기본 자료형: 숫자형, 문자형, 불린형, null, undefined

```javascript
let number = 42;
let text = "Hello, World!";
let isTrue = true;

console.log(typeof number); // "number"
console.log(typeof text); // "string"
console.log(typeof isTrue); // "boolean"
```

### 대화상자 함수 (사용자와 상호작용할 수 있는 기본 모달창 함수)

- **`alert`**: 간단한 메시지 표시
- **`prompt`**: 사용자 입력을 받음
- **`confirm`**: 확인 또는 취소 선택을 받음

```javascript
alert("Welcome to JavaScript!");
let name = prompt("Enter your name:");
let isAdult = confirm("Are you 18 or older?");
```

### 형 변환

- 문자형으로 변환: **`String(value)`**
- 숫자형으로 변환: **`Number(value)`**
- 불린형으로 변환: **`Boolean(value)`**

```javascript
let numStr = String(123); // "123"
let strNum = Number("123"); // 123
let isTrue = Boolean(1); // true
```

### 비교 연산자

- 일반 비교: **`==`**(값만 비교)
- 엄격 비교: **`===`**(값과 자료형 모두 비교)

```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

### 논리 연산자

- **`AND`**: &&
- **`OR`**: ||
- **`NOT`**: !

```javascript
let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false
console.log(isAdult || hasID); // true
console.log(!isAdult); // false
```

### 반복문

- **`while`**: 조건이 참일 때 반복
- **`for`**: 지정된 횟수만큼 반복

```javascript
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### 조건문

- **`switch`**: 여러 조건을 비교하고 분기 처리할 때 사용

```javascript
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  default:
    console.log("Unknown fruit");
}
```

### 참고 자료

- JavaScript에 대한 더 자세한 정보는 [MDN 웹 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript)를 참조하세요
  //함수
  //스코프 전역 변수, 지역변수(함수 안에서만 사용)

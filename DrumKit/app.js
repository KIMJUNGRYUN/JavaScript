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
    heading.style.textshadow = "12px 14px 22px ";
};

// 버튼 요소 선택
const btn = document.querySelectorAll(".set");

// 각 버튼 클릭 이벤트 등록
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", (e) => {
        const buttonText = e.target.textContent;
        playSound(buttonText);
        animateButton(buttonText);
    });
}

// 사운드 재생 함수
function playSound(key) {
    const audioFile = audioFiles[key.toLowerCase()];
    if (audioFile) {
        new Audio(audioFile).play();
    }
}

// 버튼 애니메이션 효과 함수
function animateButton(key) {
    const button = document.querySelector("." + key.toLowerCase());
    if (button) {
        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"), 100);
    }
}

// 키보드 이벤트 등록
document.addEventListener("keydown", (e) => {
    playSound(e.key);
    animateButton(e.key);
});


const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const button = document.getElementById("punchButton");

let loopStarted = false;

function playSequence() {
  audio1.play();

  audio1.onended = () => {
    setTimeout(() => {
      audio2.play();
    }, 1000); // 1 second delay after audio1
  };

  audio2.onended = () => {
    setTimeout(() => {
      playSequence(); // loop again
    }, 1000); // 1 second delay after audio2
  };
}

button.addEventListener("click", () => {
  if (!loopStarted) {
    loopStarted = true;
    button.disabled = true;
    button.textContent = "Wahahao";
    playSequence();
  }
});
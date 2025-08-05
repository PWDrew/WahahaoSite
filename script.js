const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");

function playSequence() {
  audio1.play();
  
  audio1.onended = () => {
    setTimeout(() => {
      audio2.play();
    }, 1000); // 1 second delay after audio1 ends
  };

  audio2.onended = () => {
    setTimeout(() => {
      playSequence(); // restart the whole loop
    }, 1000); // 1 second delay after audio2 ends
  };
}

// Start the loop when the page loads
window.addEventListener("load", () => {
  playSequence();
});

const buttons = document.querySelectorAll(".color-btn");
const magicButton = document.getElementById("magic-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedButtonColor = button.getAttribute("data-color");

    document.body.style.backgroundColor = selectedButtonColor;
  });
});

magicButton.addEventListener("click", () => {
  const characters = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    hexCode = hexCode + characters[randomNumber];
  }

  document.body.style.backgroundColor = hexCode;

  const rect = magicButton.getBoundingClientRect();

  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    particleCount: 80,
    spread: 60,
    origin: { x, y },
  });
});

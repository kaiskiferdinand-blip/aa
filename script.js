const message = `I don’t even know if you’ll ever read this.\nBut if you do… I just want you to know ally, I still think about you sometimes.\n\nWe both love and care of each other before,i still watch over you but silently\n\nAnyway, I hope you're doing okay and wish you the best in every aspect in your life,i'll keep supporting and cherishing abt you silently from afar ^^,take care my greatest person anyways the moon is beautiful isn't it ?`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

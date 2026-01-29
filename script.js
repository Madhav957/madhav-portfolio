const text =
  "I am an aspiring cloud developer with strong fundamentals in programming, networking, and operating systems. I focus on hands-on learning and continuously building practical cloud-based solutions.";

let index = 0;
const speed = 40;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

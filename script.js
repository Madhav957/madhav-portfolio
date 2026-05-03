(function () {
    emailjs.init("eqx5NhSRYNrtoAEdJ");
})();
const text = "I am an aspiring cloud developer with strong fundamentals in programming, networking, and operating systems. I focus on hands-on learning and continuously building practical cloud-based solutions.";

let index = 0;
const speed = 40;

function typeWriter() {
    const element = document.getElementById("typing-text");
    if (!element) return; 
    if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_z7aue8k",   
            "template_rx6gzak",
            this
        )
        .then(() => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            alert("Failed to send message.");
            console.log(error);
        });
    });
  }
window.onload = typeWriter;

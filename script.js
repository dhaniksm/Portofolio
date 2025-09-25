document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const text = "HEY, I'M DHANI";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("hero-title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 100);
  }
}
typing();

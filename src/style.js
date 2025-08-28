document.addEventListener("DOMContentLoaded", () => {

  emailjs.init("WBRln_LmPNRF3iD5U");

  
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("Name");
  const emailInput = document.getElementById("Email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");

  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length < 4) {
      nameError.textContent = "Name must be at least 4 characters long.";
      nameError.classList.remove("hidden");
    } else {
      nameError.textContent = "";
      nameError.classList.add("hidden");
    }
  });


  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      title: subjectInput.value.trim(),
      message: messageInput.value.trim(),
    };

 
    if (formData.name.length < 4) {
      nameError.textContent = "Name must be at least 4 characters long.";
      nameError.classList.remove("hidden");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const serviceID = "service_4rjvgyd";
    const templateID = "template_t19raba";

    emailjs.send(serviceID, templateID, formData).then(
      function () {
        alert("thanks to submit")
        window.location.href = "thankYou.html"; 
      },
      function (error) {
        alert("Failed to send email. Please try again.");
        console.error("EmailJS error:", error);
      }
    );
  });

const themeToggle = document.getElementById("theme-toggle");
const allSections = document.querySelectorAll("body, main, section"); 
const colors = ["lightblue", "lightgreen", "lightgray","white"];
let currentColorIndex = 0;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    allSections.forEach((el) => {
      el.style.backgroundColor = colors[currentColorIndex];
    });
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    
  });
}




 
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuLinks = document.querySelectorAll("#mobile-menu a");

  menuBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      document.body.style.overflow = "auto";
    });
  });

  const items = document.querySelectorAll(
    "#timeline li, #experience li"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
         
          if (index % 2 === 0) {
            entry.target.classList.add("animate-leftIn");
          } else {
            entry.target.classList.add("animate-rightIn");
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));



  new Typed(".role", {
    strings: ["Web Developer", "UI Designer", "Coder", "Java Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const userMessage = {
    name: name,
    email: email,
    message: message,
  };

  // Save to localStorage
  localStorage.setItem("userMessage", JSON.stringify(userMessage));

  alert("Your message has been saved!");
});

document.addEventListener("DOMContentLoaded", function () {
  // Load saved message from localStorage
  const savedMessage = localStorage.getItem("userMessage");
  if (savedMessage) {
    const message = JSON.parse(savedMessage);
    alert(`Your previous message was: ${message.message}`);
  }

  // Contact Form Submission
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const userMessage = {
      name: name,
      email: email,
      message: message,
    };

    // Save to localStorage
    localStorage.setItem("userMessage", JSON.stringify(userMessage));

    // Show a message based on the input
    if (message.length > 50) {
      alert("Thank you for your detailed message!");
    } else {
      alert("Thank you for your message!");
    }
  });
});

const testimonials = [
  '"This company is amazing!" - John Doe',
  '"I highly recommend their services!" - Jane Smith',
  '"Professional and reliable!" - Alex Johnson'
];

let currentIndex = 0;

function changeTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  document.getElementById("testimonialBox").innerText = testimonials[currentIndex];
}
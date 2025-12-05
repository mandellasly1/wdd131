// scripts/future-child.js

document.addEventListener("DOMContentLoaded", () => {
  // === Smooth scroll to programs when CTA button is clicked ===
  const ctaBtn = document.getElementById("cta-btn");
  const programsSection = document.getElementById("programs");

  if (ctaBtn && programsSection) {
    ctaBtn.addEventListener("click", () => {
      programsSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // === Program data ===
  const programData = [
    { title: "Youth Football Academy", description: "Training sessions for ages 6–14 with certified coaches." },
    { title: "Girls in Sports Initiative", description: "Empowering young girls through basketball and athletics." },
    { title: "Community Outreach", description: "Sports events for less privileged children in rural areas." },
    { title: "Summer Sports Camp", description: "A fun-filled camp with multiple sports and team-building activities." },
    { title: "Scholarship Program", description: "Providing financial aid for talented children to pursue sports education." }
  ];

  // === Render program cards dynamically ===
  const programsContainer = document.getElementById("programs");
  if (programsContainer) {
    programsContainer.innerHTML = "";
    programData.forEach((program) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h4>${program.title}</h4>
        <p>${program.description}</p>
        <button class="learn-more">Learn More</button>
      `;
      programsContainer.appendChild(card);
    });

    programsContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("learn-more")) {
        alert("More details coming soon!");
      }
    });
  }

  // === Highlight active nav link when clicked ===
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.removeAttribute("aria-current"));
      link.setAttribute("aria-current", "page");
    });
  });

  // === Footer year and last modified ===
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

  // === Contact form handling ===
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      formStatus.textContent = "Sending message...";
      formStatus.style.color = "#004aad";

      setTimeout(() => {
        formStatus.textContent = "✅ Thank you! Your message has been received.";
        formStatus.style.color = "green";
        contactForm.reset();
      }, 1500);
    });
  }

  // === Mobile sidebar toggle ===
  const toggleBtn = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("mobileSidebar");

  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });

    // === Close sidebar when a link is clicked ===
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("open");
      });
    });
  }

  // === Highlight contact form if navigated via Sign Up ===
  if (window.location.hash === "#contactForm") {
    const formSection = document.getElementById("contactForm");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
      formSection.style.boxShadow = "0 0 10px 3px rgba(46,139,87,0.6)";
      setTimeout(() => {
        formSection.style.boxShadow = "";
      }, 2000);
    }
  }
});
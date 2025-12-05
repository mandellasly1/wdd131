// scripts/future-child.js

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to programs when CTA button is clicked
  const ctaBtn = document.getElementById("cta-btn");
  const programsSection = document.getElementById("programs");

  ctaBtn.addEventListener("click", () => {
    programsSection.scrollIntoView({ behavior: "smooth" });
  });

  // Example program data (5 items)
  const programData = [
    {
      title: "Youth Football Academy",
      description: "Training sessions for ages 6–14 with certified coaches.",
    },
    {
      title: "Girls in Sports Initiative",
      description: "Empowering young girls through basketball and athletics.",
    },
    {
      title: "Community Outreach",
      description: "Sports events for less privileged children in rural areas.",
    },
    {
      title: "Summer Sports Camp",
      description: "A fun-filled camp with multiple sports and team-building activities.",
    },
    {
      title: "Scholarship Program",
      description: "Providing financial aid for talented children to pursue sports education.",
    },
  ];


  

  // Render program cards dynamically
  const cardsContainer = document.querySelector(".cards");

  programData.forEach((program) => {
    const card = document.createElement("div");
    card.classList.add("card");

 card.innerHTML = `
  <h4>${program.title}</h4>
  <p>${program.description}</p>
  <button class="learn-more" style="background-color:${program.color};">Learn More</button>
`;

    cardsContainer.appendChild(card);
  });

  // Add click event to "Learn More" buttons
  cardsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("learn-more")) {
      alert("More details coming soon!");
    }
  });

  // Highlight active nav link when clicked
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.removeAttribute("aria-current"));
      link.setAttribute("aria-current", "page");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Auto-update footer year and last modified
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }

  // Contact form handling
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  if (contactForm) {
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
});


const programsContainer = document.getElementById("programs");

// Clear container before rendering
programsContainer.innerHTML = "";

programData.forEach(program => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h4>${program.title}</h4>
    <p>${program.description}</p>
  `;
  programsContainer.appendChild(card);
});
//future-child.js

const programs = [
  { title: "Free Sports Training", desc: "Structured coaching in football, basketball, and athletics." },
  { title: "Scholarships & Education", desc: "Academic support for talented youth to stay in school." },
  { title: "Mentorship & Counseling", desc: "Guidance from coaches and role models." },
  { title: "Health & Nutrition", desc: "Fitness education and healthy meals programs." },
  { title: "Inclusive Community Events", desc: "Tournaments welcoming all abilities." }
];
function renderPrograms() {
  const container = document.getElementById("programs");
  if (!container) return;
  container.innerHTML = programs.map(p => `
    <div class="card">
      <h4>${p.title}</h4>
      <p>${p.desc}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderPrograms);

// Contact form handling
const form = document.getElementById("contactForm");
form?.addEventListener("submit")
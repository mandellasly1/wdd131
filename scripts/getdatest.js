// Dynamically set current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Dynamically set last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const script = document.createElement('script');
script.src = 'getdates.js';
document.head.appendChild(script);
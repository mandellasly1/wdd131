// Footer: Current Year and Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
const temp = 28; // °C
const speed = 10; // km/h

function calculateWindChill(t, s) {
  return (
    13.12 +
    0.6215 * t -
    11.37 * Math.pow(s, 0.16) +
    0.3965 * t * Math.pow(s, 0.16)
  ).toFixed(1);
}

const windChill =
  temp <= 10 && speed > 4.8 ? calculateWindChill(temp, speed) + "°C" : "N/A";

document.getElementById("windchill").textContent = windChill;
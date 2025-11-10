const studentReport = [11, 42, 33, 64, 29, 37, 44];
for (let i = 0; i < studentReport.length; i++) {
  if (studentReport[i] < 30) {
    console.log(studentReport[i]);
  }
}



let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < 30) {
    console.log(studentReport[i]);
  }
  i++;
}



studentReport.forEach(function(value) {
  if (value < 30) {
    console.log(value);
  }
});



for (let index in studentReport) {
  if (studentReport[index] < 30) {
    console.log(studentReport[index]);
  }
}



const DAYS = 6;
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = new Date();
for (let i = 0; i < DAYS; i++) {
  let futureDate = new Date();
  futureDate.setDate(today.getDate() + i);
  console.log(dayNames[futureDate.getDay()]);
}
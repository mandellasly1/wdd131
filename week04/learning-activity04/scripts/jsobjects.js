// Define the course object with sections
let aCourse = {
  code: "WDD131",
  title: "Dynamic Web Fundamentals",
  credits: 2,
  sections: [
    { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
    { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
  ]
};

// Function to set course info in the page
function setCourseInformation(course) {
  document.querySelector("#courseName").innerHTML = `${course.code} – ${course.title}`;
}

// Function to render sections into the table
function renderSections(course) {
  const tbody = document.querySelector("#sections tbody");
  let rows = "";
  for (const section of course.sections) {
    rows += `<tr>
      <td>${section.section}</td>
      <td>${section.enrolled}</td>
      <td>${section.instructor}</td>
    </tr>`;
  }
  tbody.innerHTML = rows;
}

// Function to add a new section
function addSection(course) {
  const sectionNum = document.querySelector("#newSection").value;
  const enrolledNum = parseInt(document.querySelector("#newEnrolled").value);
  const instructorName = document.querySelector("#newInstructor").value;

  if (sectionNum && instructorName && !isNaN(enrolledNum)) {
    course.sections.push({
      section: sectionNum,
      enrolled: enrolledNum,
      instructor: instructorName
    });
    renderSections(course); // refresh table
    // clear inputs
    document.querySelector("#newSection").value = "";
    document.querySelector("#newEnrolled").value = "";
    document.querySelector("#newInstructor").value = "";
  } else {
    alert("Please fill in all fields correctly.");
  }
}

// Initialize page
setCourseInformation(aCourse);
renderSections(aCourse);

// Event listener for button
document.querySelector("#addSectionBtn").addEventListener("click", () => addSection(aCourse));
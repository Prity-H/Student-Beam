document.getElementById("attendanceForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const id = document.getElementById("studentID").value.trim();

  // Fake "attendance sync" message
  document.getElementById("statusMsg").textContent = "Attendance synced successfully.";

  // Hidden logic: store data (simulate ID creation)
  const existing = JSON.parse(localStorage.getItem("studentData") || "[]");
  existing.push({ name, id, timestamp: new Date().toISOString() });
  localStorage.setItem("studentData", JSON.stringify(existing));

  // Clear form
  document.getElementById("attendanceForm").reset();
});
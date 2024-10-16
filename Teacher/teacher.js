// Sample data for classes and students
const classes = [
    { className: " Section A", students: 70 },
    { className: " Section B", students: 50 },
    { className: " Section C", students: 60 }
];

// Sample data for statistics
const stats = [
    { studentName: "Ravi", totalDays: 30, presentDays: 29 },
    { studentName: "Sachin", totalDays: 30, presentDays: 28 },
    { studentName: "Sunny", totalDays: 30, presentDays: 27 }
];

// Populate Class List
const classTableBody = document.getElementById("classTableBody");
classes.forEach(cls => {
    const row = `<tr>
                    <td>${cls.className}</td>
                    <td>${cls.students}</td>
                    <td><button class="viewClass">View Class</button></td>
                </tr>`;
    classTableBody.innerHTML += row;
});

// Populate Class Dropdown in Attendance Form
const selectClass = document.getElementById("selectClass");
classes.forEach(cls => {
    const option = `<option value="${cls.className}">${cls.className}</option>`;
    selectClass.innerHTML += option;
});

// Mark Attendance Functionality
document.getElementById("markAttendance").addEventListener("click", () => {
    const className = document.getElementById("selectClass").value;
    const studentRoll = document.getElementById("studentRoll").value;
    const attendanceStatus = document.getElementById("attendanceStatus").value;

    if (studentRoll === "") {
        document.getElementById("attendanceMessage").innerText = "Please enter the student's Roll No.";
    } else {
        document.getElementById("attendanceMessage").innerText = `Attendance marked for ${studentRoll} in ${className} as ${attendanceStatus}.`;
    }
});

// Populate Attendance Stats
const statsTableBody = document.getElementById("statsTableBody");
stats.forEach(student => {
    const percentage = ((student.presentDays / student.totalDays) * 100).toFixed(2);
    const row = `<tr>
                    <td>${student.studentName}</td>
                    <td>${student.totalDays}</td>
                    <td>${student.presentDays}</td>
                    <td>${percentage}%</td>
                </tr>`;
    statsTableBody.innerHTML += row;
});

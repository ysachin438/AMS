// DOM elements
const loginModal = document.getElementById('loginModal');
const closeModal = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const roleButtons = document.querySelectorAll('.role-btn');
const roleName = document.getElementById('roleName');
const dashboard = document.getElementById('dashboard');
const userRole = document.getElementById('userRole');

// Open login modal for different roles
roleButtons.forEach(button => {
    button.addEventListener('click', () => {
        roleName.innerText = button.innerText;
        loginModal.style.display = 'flex';
    });
});

// Close modal
closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Handle login submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic role-based authentication simulation
    if (username === "admin" && password === "admin123") {
        window.location.href = "Admin/admin.html";
    } else if (username === "teacher" && password === "teacher123") {
        window.location.href ="Teacher/teacher.html";
    } else if (username === "student" && password === "student123") {
        window.location.href="student/student.html"
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid credentials. Try again.';
    }
});

// Show dashboard based on role
function showDashboard(role) {
    userRole.innerText = role;
    loginModal.style.display = 'none';
    dashboard.style.display = 'block';
}
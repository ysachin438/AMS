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
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = roleName.innerText;

    try {
        // Send request to backend
        const response = await fetch('http://localhost:8000/staff-login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, role })
        });
        
        // Parse the response
        const data = await response.json();
        console.log(data);

        // Handle the response
        if (data.success) {
            const role = data.role.toLowerCase();
            
            // Redirect to the appropriate dashboard
            if (role === "admin") {
                window.location.href = "Admin/admin.html";
            } else if (role === "teacher") {
                window.location.href = "Teacher/teacher.html";
            } else if (role === "student") {
                window.location.href = "Student/student.html";
            }
        } else {
            // Display error message for invalid credentials
            document.getElementById('loginMessage').innerText = data.message || 'Invalid credentials. Try again.';
            document.getElementById('loginMessage').style.color = 'red';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('loginMessage').innerText = 'An error occurred. Please try again.';
        document.getElementById('loginMessage').style.color = 'red';
    }
});

// Show dashboard based on role
function showDashboard(role) {
    userRole.innerText = role;
    loginModal.style.display = 'none';
    dashboard.style.display = 'block';
}

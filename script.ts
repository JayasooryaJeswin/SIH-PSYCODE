document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle login logic
    window.location.href = 'dashboard.html'; // Redirect to main dashboard
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle signup logic
    window.location.href = 'login.html'; // Redirect to login page
});

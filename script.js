// script.js

// Login Form Submission
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Add your backend code here to handle user authentication.
    // For this example, we'll simulate a successful login and redirect to the homepage.
    window.location.href = "index.html";
});

// Resume Creation Form Submission
const resumeForm = document.getElementById('resumeForm');

resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Add your backend code here to process the form data and save the resume.
    // For this example, we'll just show an alert to indicate success.
    alert("Resume created successfully!");
});
const menuIcon = document.getElementById('menuIcon');
const navbarItems = document.getElementById('navbarItems');

menuIcon.addEventListener('click', () => {
  navbarItems.classList.toggle('active');
});

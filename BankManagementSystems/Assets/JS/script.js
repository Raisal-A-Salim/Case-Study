document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Logic
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('visible');
            } else {
                navbar.classList.remove('visible');
            }
        });
    }

    // 2. Logo Click Logic
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            // Check if we are already on index.html
            if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Optional reload as per original req, but scroll is nicer. 
                // Let's reload to be strict with invalidating state if needed.
                setTimeout(() => window.location.reload(), 500);
            }
        });
    }
});

/**
 * Handle Employee Registration
 * Called via form onsubmit in register.html
 */
function handleRegistration() {
    // Get values
    const fName = document.getElementById('firstName').value;
    const lName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    // Validation
    if (pass !== confirm) {
        alert("Passwords do not match!");
        return;
    }

    // Generate Random 7-Digit ID
    // 1000000 to 9999999
    const randomIdNumber = Math.floor(1000000 + Math.random() * 9000000);
    const empId = "EMP" + randomIdNumber;

    // Transition to Acknowledgment Screen
    const formSection = document.getElementById('registrationSection');
    const ackSection = document.getElementById('ackSection');

    if (formSection && ackSection) {
        // Hide Form
        formSection.style.display = 'none';

        // Show Success
        ackSection.style.display = 'block';
        ackSection.classList.add('fade-in'); // Add animation class

        // Populate Data
        document.getElementById('generatedId').textContent = empId;
        document.getElementById('ackName').textContent = fName + " " + lName;
        document.getElementById('ackEmail').textContent = email;
    }
}

// Login Handler
function handleLogin() {
    const username = document.getElementById("empId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username !== "" && password !== "") {
        window.location.href = "../pages/admin_home.html";
    }


    //     const empId = document.getElementById('empId').value;
    //     const pass = document.getElementById('password').value;

    //     if (empId && pass) {
    //         // Simulate Login Success - Redirect to Dashboard
    //         window.location.href = 'Pages/admin_home.html';
    //     } else {
    //         alert("Please enter credentials");
    //     }
    // }
}

// Dashboard Functions
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        window.location.href = 'index.html';
    }
}

function changeUser() {
    window.location.href = 'login.html';
}

// Global Login Form Handler (Attached dynamically if form exists)
document.addEventListener('submit', (e) => {
    const username = document.getElementById("empId").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username !== "" && password !== "") {
        window.location.href = "../pages/admin_home.html";
    }
    // if (e.target && e.target.id === 'loginForm') {
    //     const empId = document.getElementById('empId').value;
    //     const pass = document.getElementById('password').value;

    // if (empId && pass) {
    //     // Simulate Login Success
    //     window.location.href = '.../Pages/admin_home.html';
    //     // Note: Preventing default is handled by onsubmit="event.preventDefault()" in HTML, 
    //     // but we need to ensure this logic runs. 
    //     // In login.html: onsubmit="event.preventDefault(); handleLogin();"
    // }
    // }
});

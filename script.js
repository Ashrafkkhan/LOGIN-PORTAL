// Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const messageDiv = document.getElementById('message');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');

// Switch to Register Form
registerLink.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
    messageDiv.textContent = '';
});

// Switch to Login Form
loginLink.addEventListener('click', () => {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    messageDiv.textContent = '';
});

// Register User
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;

    if(localStorage.getItem(username)) {
        messageDiv.textContent = 'Username already exists!';
    } else {
        localStorage.setItem(username, password);
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Registration successful! Please login.';
        registerForm.reset();
        setTimeout(() => {
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
            messageDiv.textContent = '';
            messageDiv.style.color = 'red';
        }, 2000);
    }
});

// Login User
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);
    if(storedPassword && storedPassword === password) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful! Welcome ' + username;
        loginForm.reset();
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password!';
    }
});

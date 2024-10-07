const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const showLogin = document.getElementById('showLogin');
const showRegister = document.getElementById('showRegister');
const message = document.getElementById('message');

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
    showLogin.parentElement.style.display = 'none';
    showRegister.parentElement.style.display = 'block';
});

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    showLogin.parentElement.style.display = 'block';
    showRegister.parentElement.style.display = 'none';
});

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    const result = await response.json();
    showMessage(result.message, result.success ? 'success' : 'error');
});

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('loginName').value;
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    const result = await response.json();
    showMessage(result.message, result.success ? 'success' : 'error');
});

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = 'block';
    setTimeout(() => {
        message.style.display = 'none';
    }, 3000);
}
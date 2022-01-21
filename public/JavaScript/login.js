async function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Contant-Type': 'application/json' }

        });
        if (response.ok) {
            document.location.replace('/dashboard/');

        } else {
            alert(response.statusText);
        }
    }
}
async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email_signup').value.trim();
    const password = document.querySelector('password-signup').value.trim();
    if (username && first_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                first_name,
                last_name,
                email,
                password

            }),
            headers: { 'Content-Type': 'application/json' }

        });
        if (response.ok) {
            document.location.replace('/dashboard/')
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
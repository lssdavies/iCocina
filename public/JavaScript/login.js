async function loginFormHandler(event) {
    event.preventDefault();
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            header: { 'Contant-Type': 'application/json' }

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
    const id = widow.location.toSting().split('/')[window.location.toString().split('/').length - 1];
    const username = document.querySelector('#username-signup').value.trim();
    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email_signup').value.trim();
    const password = document.querySelector('password-signup').value.trim();
    if (username && first_name && last_name && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                id,
                username,
                first_name,
                last_name,
                email,
                password

            }),
            header: { 'Content-Type': 'application/json' }

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
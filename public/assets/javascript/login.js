async function loginFormHandler(event) {
    event.preventDefault();
    console.log('clicked login');
    const email = document.querySelector('#email_login').value.trim();
    const password = document.querySelector('#password_login').value.trim();
    console.log(email)
    console.log(password)
    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }

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
    const username = document.querySelector('#username_signup').value.trim();
    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();
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
document.querySelector('#signInForm').addEventListener('submit', loginFormHandler);
document.querySelector('#signUpForm').addEventListener('submit', signupFormHandler);
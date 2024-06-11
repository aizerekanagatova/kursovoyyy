const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('.title').textContent;
    console.log(title);

    if (title === 'Регистрация') {

        if (username.value === '' || password.value === '' || confirm_password.value === '' || email.value === '') {
            alert('Please fill in all fields');
            return;
        }

        if (password.value !== confirm_password.value) {
            alert('Passwords do not match');
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        users.push({ username: username.value, password: password.value, email: email.value })
        localStorage.setItem("users", JSON.stringify(
            users
        ))
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.length === 0) {
        alert('Please register first');
        return;
    }

    const user = users.find(user => user.username === username.value && user.password === password.value);

    if (user.username === username.value && user.password === password.value) {
        localStorage.setItem("user", JSON.stringify(user));
        alert('Login successful');
        window.location.href = "http://" + window.location
            .host + '/index.html';
        return;
    }



    alert('Invalid username or password');



});



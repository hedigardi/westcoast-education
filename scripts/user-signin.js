import HttpClient from './http.js';
import { showUserInfo } from './dom.js';

const signinButton = document.querySelector('#signinButton');

const signinHandler = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#usernameSignin').value.toLowerCase();
    const password = document.querySelector('#passwordSignin').value;

    const http = new HttpClient('http://localhost:3000/users');
    const users = await http.get();

    const foundUser = users.find(user => user.username.trim().toLowerCase() === username && user.password === password);

    if (foundUser) {
        localStorage.setItem('loggedInUser', JSON.stringify(foundUser));

        showUserInfo();

        showFeedbackMessage('success', 'Nu är du inloggad med användarnamnet: ' + username);

        window.location.reload();
    } else {
        showFeedbackMessage('error', 'Fel användarnamn eller lösenord!');
    }
};

const showFeedbackMessage = (type, message) => {
    const feedbackMessage = document.createElement('p');
    feedbackMessage.textContent = message;
    feedbackMessage.classList.add(type + '-message');

    const signinForm = document.querySelector('#signinForm');
    signinForm.insertAdjacentElement('afterend', feedbackMessage);

    setTimeout(() => {
        feedbackMessage.remove();
    }, 3000);
};

signinButton.addEventListener('click', signinHandler);

export { showUserInfo };
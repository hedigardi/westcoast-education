import HttpClient from './http.js';
import { convertFormDataToJson } from './utilities.js';

const signupForm = document.querySelector('#signupForm');
const successMessage = document.createElement('p'); 

const addUser = async (e) => {
  e.preventDefault();

  const user = new FormData(signupForm);
  const obj = convertFormDataToJson(user);
  await saveUser(obj);

  showSuccessMessage();
  signupForm.reset();
};

const saveUser = async (user) => {
  const url = 'http://localhost:3000/users';
  const http = new HttpClient(url);

  try {
    await http.add(user);
  } catch (error) {
    console.error('Det uppstod ett problem med att spara användaren:', error);
  }
};

const showSuccessMessage = () => {
  successMessage.textContent = 'Registrering klar!';
  signupForm.insertAdjacentElement('afterend', successMessage);

  setTimeout(() => {
        successMessage.remove();
    }, 3000);
};

signupForm.addEventListener('submit', addUser);

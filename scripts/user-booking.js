import HttpClient from './http.js';

document.addEventListener('DOMContentLoaded', function () {
  const bookingForm = document.getElementById('bookingForm');
  bookingForm.addEventListener('submit', handleBookingSubmit);
});

function handleBookingSubmit(e) {
  e.preventDefault();

  const classroomCheckbox = document.getElementById('classroom');
  const distanceCheckbox = document.getElementById('distance');
  const fullnameInput = document.getElementById('fullnameBooking');
  const billingAddressInput = document.getElementById('billingAddressBooking');
  const usernameInput = document.getElementById('usernameBooking');
  const mobileNumberInput = document.getElementById('mobileNumberBooking');

  const courseId = sessionStorage.getItem('selectedCourseId');
  const courseTitle = sessionStorage.getItem('selectedCourseTitle');

  const bookingData = {
    courseId: courseId,
    courseTitle: courseTitle,
    classroom: classroomCheckbox.checked,
    distance: distanceCheckbox.checked,
    fullname: fullnameInput.value,
    billingAddress: billingAddressInput.value,
    username: usernameInput.value,
    mobileNumber: mobileNumberInput.value,
  };

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!loggedInUser) {
    showFeedbackMessage('error', 'Ingen inloggad användare hittades!');
    return;
  }

  bookingData.userId = loggedInUser.id;

  saveBookingData(bookingData);
}

async function saveBookingData(bookingData) {
  try {
    const httpClient = new HttpClient('http://localhost:3000/bookings');
    const newBooking = await httpClient.add(bookingData);

    showFeedbackMessage('success', 'Tack! Du är nu inskriven på kursen.');
    
    bookingForm.reset();

  } catch (error) {
    showFeedbackMessage('error', 'Ett fel inträffade vid bokningen');
  }
}

const showFeedbackMessage = (type, message) => {
  const feedbackMessage = document.createElement('p');
  feedbackMessage.textContent = message;
  feedbackMessage.classList.add(type + '-message');

  const bookingForm = document.querySelector('#bookingForm');
  bookingForm.insertAdjacentElement('afterend', feedbackMessage);

  setTimeout(() => {
    feedbackMessage.remove();
  }, 3000);
};

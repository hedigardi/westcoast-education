import HttpClient from './http.js';
import { createAdminBookingSection } from './dom.js';

window.addEventListener("DOMContentLoaded", fetchAndDisplayBookings);

async function fetchAndDisplayBookings() {
  const usersHttpClient = new HttpClient('http://localhost:3000/users');
  const coursesHttpClient = new HttpClient('http://localhost:3000/courses');
  const bookingsHttpClient = new HttpClient('http://localhost:3000/bookings'); 

  try {
    const users = await usersHttpClient.get();
    const courses = await coursesHttpClient.get();
    const bookings = await bookingsHttpClient.get(); 

    displayBookings(users, courses, bookings);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayBookings(users, courses, bookings) {
  const adminBookingsContainer = document.getElementById('adminBookings');

  courses.forEach(course => {
    const enrolledUsers = users.filter(user => user.enrolledCourses.includes(course.title));
    const courseBookings = bookings.filter(booking => booking.courseId === String(course.id)); 

    if (enrolledUsers.length > 0 || courseBookings.length > 0) {
      const courseSection = createAdminBookingSection(course, enrolledUsers, courseBookings);
      adminBookingsContainer.appendChild(courseSection);
    }
  });
}
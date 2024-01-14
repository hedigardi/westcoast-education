import HttpClient from './http.js';
import { displayCourseDetails } from './dom.js';
import { navAnimation } from "./nav.js";

async function initPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");

    try {
        const httpClient = new HttpClient('http://localhost:3000/courses');
        const courses = await httpClient.get();

        // Hämta den specifika kursen baserat på courseId
        const selectedCourse = courses.find(course => course.id == courseId);

        // Visa kursdetaljerna på sidan
        displayCourseDetails(selectedCourse);
    } catch (error) {
      // Skicka tillbaka felet till den som anropar metoden...
      throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }

    navAnimation();
}

document.addEventListener('DOMContentLoaded', initPage);

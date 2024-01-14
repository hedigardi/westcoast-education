import HttpClient from './http.js';
import { displayCourseDetails } from './dom.js';
import { navAnimation } from "./nav.js";

async function initPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");

    try {
        const httpClient = new HttpClient('http://localhost:3000/courses');
        const courses = await httpClient.get();

        const selectedCourse = courses.find(course => course.id == courseId);

        displayCourseDetails(selectedCourse);
    } catch (error) {
      throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }

    navAnimation();
}

document.addEventListener('DOMContentLoaded', initPage);

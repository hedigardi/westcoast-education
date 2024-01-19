import HttpClient from './http.js';
import { displayCourseDetails } from './dom.js';
import { navAnimation } from "./nav.js";
import { showUserInfo } from "./user-signin.js";

async function initPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get("id");

    try {
        const httpClient = new HttpClient('http://localhost:3000/courses');
        const courses = await httpClient.get();

        const selectedCourse = courses.find(course => course.id == courseId);

        if (selectedCourse) {
            sessionStorage.setItem('selectedCourseId', courseId);
            sessionStorage.setItem('selectedCourseTitle', selectedCourse.title);

            displayCourseDetails(selectedCourse);

            const loggedInUser = localStorage.getItem('loggedInUser');

            if (loggedInUser) {
                document.getElementById('booking').style.display = 'block';

                document.getElementById('signup').style.display = 'none';
                document.getElementById('signin').style.display = 'none';
            } else {
                document.getElementById('booking').style.display = 'none';

                document.getElementById('signup').style.display = 'block';
                document.getElementById('signin').style.display = 'block';
            }
        } else {
            console.error('Kursen kunde inte hittas.');
        }
    } catch (error) {
        throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }

    navAnimation();
    showUserInfo();
}

document.addEventListener('DOMContentLoaded', initPage);

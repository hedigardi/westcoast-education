import { createCard } from './dom.js';

export const getTopCourses = (courses) => {
  return courses.sort((a, b) => b.grading - a.grading).slice(0, 3);
};

export const displayTopCourses = (courses, containerId) => {
  const topCoursesContainer = document.getElementById(containerId);

  const topCourses = getTopCourses(courses);

  topCourses.forEach((course) => {
    const card = createCard(course);
    topCoursesContainer.appendChild(card);
  });
};

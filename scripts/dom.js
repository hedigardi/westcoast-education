const createCard = (course) => {
  const div = document.createElement('div');
  div.classList.add('course-card');
  div.appendChild(createImage(course.imageUrl, course.id));
  div.appendChild(createTitle(course));
  div.appendChild(createCourseInfo(course));
  div.appendChild(createInfoButton(course.id));

  return div;
};

const createImage = (imageUrl, id) => {
  const image = document.createElement('img');
  image.setAttribute('src', `../content/images/${imageUrl}`);
  image.setAttribute('id', id);

  return image;
};

const createTitle = (course) => {
  const title = document.createElement('h3');
  title.appendChild(
    document.createTextNode(`${course.title}`)
  );

  return title;
};

const createCourseInfo = (course) => {
  const description = document.createElement('p');
  description.appendChild(
    document.createTextNode(`${course.description}`)
  );

  return description;
};

const createInfoButton = (id) => {
  const a = document.createElement('a');
  a.classList.add('button');
  a.setAttribute('href', `/pages/course-details.html?id=${id}`);
  a.appendChild(
    document.createTextNode('Mer detalj om kursen')
  );

  return a;
};

const addImageClickHandler = (images) => {
  images.forEach((image) => {
    const src = image.getAttribute('src');
    const courseId = image.getAttribute('id');

    image.addEventListener('click', () => {
      location.href = `/pages/course-details.html?id=${courseId}`;
    });
  });
};

export { createCard, addImageClickHandler };

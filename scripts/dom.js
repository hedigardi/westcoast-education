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

const createCardDetails = (course) => {
  const cardDetailsDiv = document.createElement('div');
  cardDetailsDiv.classList.add('course-card-details');
  cardDetailsDiv.appendChild(createImage(course.imageUrl));
  cardDetailsDiv.appendChild(createTitle(course));
  cardDetailsDiv.appendChild(createDescription(course));
  cardDetailsDiv.appendChild(createDetailsHeader());
  cardDetailsDiv.appendChild(createDetailsList(course));
  cardDetailsDiv.appendChild(createBookButton());

  return cardDetailsDiv;
};

const createDescription = (course) => {
  const description = document.createElement('p');
  description.appendChild(document.createTextNode(course.description));
  return description;
};

const createDetailsHeader = () => {
  const detailsHeader = document.createElement('h4');
  detailsHeader.appendChild(document.createTextNode('Mer detaljer'));
  return detailsHeader;
};

const createDetailsList = (course) => {
  const detailsList = document.createElement('ul');

  const detailsItems = [
    'Kursnummer: ' + course.number,
    'Tillgänglighet: ' + course.availability,
    'Varaktighet: ' + course.duration + ' timmar',
    'Kursstart: ' + course.scheduleddate,
    'Pris: ' + course.price + ' kr'
  ];

  detailsItems.forEach((itemText) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(itemText));
    detailsList.appendChild(li);
  });

  return detailsList;
};

const createBookButton = () => {
  const bookButton = document.createElement('a');
  bookButton.classList.add('button');
  bookButton.setAttribute('href', '#'); // Lägg till den riktiga länken när det finns en bokningssida
  bookButton.appendChild(document.createTextNode('Boka kursen'));
  return bookButton;
};

const displayCourseDetails = (course) => {
  const container = document.getElementById("course-details-container");

  container.innerHTML = "";
  const cardDetails = createCardDetails(course);

  container.appendChild(cardDetails);
};

export { createCard, addImageClickHandler, displayCourseDetails };

export default function loadPageDiv() {

    const pageWrapper = document.createElement('div');
    const title = document.createElement('div');
    title.classList.add('title');
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    const description = document.createElement('div');
    description.classList.add('description');

    pageWrapper.appendChild(title);
    pageWrapper.appendChild(imgDiv);
    pageWrapper.appendChild(description);

    title.textContent = 'Restaurant Page';
    description.textContent = 'Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant.';
 
    return pageWrapper;
}
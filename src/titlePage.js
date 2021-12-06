import image from './restaurant.png';

function createHomePage() {

    const pageWrapper = document.createElement('div');
    pageWrapper.classList.add('home');
    const title = document.createElement('div');
    title.classList.add('homeTitle');
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('homeImgDiv');
    
    const img = document.createElement('img');
    img.classList.add('homeImg');
    img.src = image;

    const description = document.createElement('div');
    description.classList.add('homeDescription');

    pageWrapper.appendChild(title);
    pageWrapper.appendChild(imgDiv);
    pageWrapper.appendChild(description);
    imgDiv.appendChild(img);

    title.textContent = 'Fantasy Restaurant';
    description.textContent = 'Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant. Hello this is stuff about this restaurant.';
 
    return pageWrapper;
}

const home = createHomePage();
export default home;
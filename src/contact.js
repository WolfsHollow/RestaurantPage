import boxImg from './box.png';
import gorlorbImg from './gorlorb.jpg';
import wulfesImg from './wolf.jpg';
import flufflesImg from './fluffles.png';

const contactPage = document.createElement('div');
contactPage.classList.add('contactPage');

const contactTitle = document.createElement('div');
contactTitle.textContent = 'Contact Us';
contactTitle.classList.add('contactTitle');

contactPage.appendChild(contactTitle);

let peopleObjectArray = [];

console.log(`we're on the menu`);
class Contact {
    constructor(name, position, phoneNumber, email, img){
        this.name = name;
        this.position = position;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.img = img;
    }       
}

function createContactDiv(contact){
    const contactWrapper = document.createElement('div');
    const textWrapper = document.createElement('div');
    const contactImgWrapper = document.createElement('div');

    const contactName = document.createElement('div');
    const contactDescription = document.createElement('div');
    const contactImg = document.createElement('img');

    contactWrapper.classList.add('contactWrapper');
    contactName.classList.add('contactName');
    contactDescription.classList.add('contactDescription');
    contactImg.classList.add('contactImg');
    contactImgWrapper.classList.add('contactImgDiv');

    contactWrapper.appendChild(textWrapper);
    textWrapper.appendChild(contactName);
    textWrapper.appendChild(contactDescription);
    contactWrapper.appendChild(contactImgWrapper);
    contactImgWrapper.appendChild(contactImg);
 
    contactName.textContent = contact.name;
    contactDescription.innerText = 
    `${contact.position}
    ${contact.phoneNumber}
    ${contact.email}`;
    contactImg.src = contact.img;

    return contactWrapper;
}

let box = new Contact('Adam Box', 'Manager', '235-255-3333', 'box@fakeemail.com', boxImg);
let gorlorb = new Contact('Gore Lorb', 'Customer Service', '420-666-6969', 'gorlorb@fakeemail.com', gorlorbImg);
let wulfes = new Contact('Wulfes Hollow', 'Owner', '555-555-5555', 'wulfes@fakeemail.com', wulfesImg);
let fluffles = new Contact('Fluffles', 'The Dog', '123-456-7890', 'fluffles@fakeemail.com', flufflesImg);


peopleObjectArray.push(box);
peopleObjectArray.push(gorlorb);
peopleObjectArray.push(wulfes);
peopleObjectArray.push(fluffles);

function addContactsToPage(peopleObjectArray){
    for (let i=0; i < peopleObjectArray.length; i++){
        let newContact = createContactDiv(peopleObjectArray[i]);
        contactPage.appendChild(newContact);
    }
    return contactPage;
}

addContactsToPage(peopleObjectArray);

export default contactPage;
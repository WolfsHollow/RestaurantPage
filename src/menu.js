import ATpic from './AdeptusTemptation.png';
import BPSpic from './BlackPerchStew.png';
import CCPpic from './ColdCutPlatter.png';
import CSpic from './CrystalShrimp.png';
import FPTpic from './FivePickledTreasures.png';
import FMPpic from './FragrantMashedPotatoes.png';
import CGIpic from './ComeGetIt.png';

const menu = document.createElement('div');
menu.classList.add('menuPage');

const menuTitle = document.createElement('div');
menuTitle.textContent = 'Menu';
menuTitle.classList.add('menuTitle');

menu.appendChild(menuTitle);

let menuObjectArray = [];

console.log(`we're on the menu`);
class MenuItem {
    constructor(name, price, img, description){
        this.name = name;
        this.price = price;
        this.img = img;
        this.description = description;
    }    
   
}

function createMenuDiv(menuItem){
    const menuWrapper = document.createElement('div');
    const textWrapper = document.createElement('div');

    const itemName = document.createElement('div');
    const itemDescription = document.createElement('div');
    const itemImg = document.createElement('img');
    const itemPrice = document.createElement('div');

    itemPrice.classList.add('price');
    itemName.classList.add('itemName');
    itemDescription.classList.add('description');
    menuWrapper.classList.add('menu');
    textWrapper.classList.add('menuTextWrapper');

    menuWrapper.appendChild(textWrapper);
    textWrapper.appendChild(itemName);
    textWrapper.appendChild(itemDescription);

    menuWrapper.appendChild(itemImg);
    menuWrapper.appendChild(itemPrice);

    itemName.textContent = menuItem.name;
    itemPrice.textContent = menuItem.price;
    itemDescription.textContent = menuItem.description;
    itemImg.src = menuItem.img;

    return menuWrapper;
}

let ATDescription = `A complex, famous type of Liyue cuisine. This dish is a rare and exquisite mix of both land and sea, combining countless delicious delicacies in one flavor-filled pot. Each mouthful is a moment to remember — it's even irresistible enough to entice the adepti down from their celestial abode.`;
let BPSDescription = `A poached fish dish. The fish fillets are so tender and juicy that they almost seem to come alive in your mouth. The sense of loss is so unbearable when you swallowed a piece down that you just had to treat yourself to another piece.`;
let CCPDescription = `A plate of cold cut meat. An equal balance of bacon, ham and sausage keeps everyone happy.`;
let CSDescription = `One of Liyue's traditional snacks. The stuffing is taken from whole fresh shrimp, and the glistening quality of the flour can be guessed at from the translucence of the outer skin. Has a springy, tasty chew.`;
let FPTDescription = `Pickled vegetables. A round of fermentation makes food richer and also allows it to keep for longer. There were originally only four "treasures," but for auspiciousness' sake, the four vegetables were mixed and plated up with one additional "treasure" added in, hence the name "Five Pickled Treasures."`;
let FMPDescription = `Seasoned mashed potatoes. The potatoes were thoroughly mashed before a sauce was drizzled over them. The mouthfeel is soft and smooth and it has a rich, multi-layered flavor profile. A satisfying choice for a hungry stomach, whether as a side or as a main dish.`;
let CGIDescription = `Traditional cuisine made to celebrate Lantern Rite. There is no great refinement in the making of this food, and it appears in Liyue often during festival season. Whenever this dish is served up, the person at the head of the table will invite everyone to dig in, saying "Come on, eat, eat," hence the name.`;

let AT = new MenuItem('Adeptus Temptation', '$2', ATpic, ATDescription);
let BPS = new MenuItem('Black Perch Stew', '$3', BPSpic, BPSDescription);
let CCP = new MenuItem('Cold Cut Platter', '$4', CCPpic, CCPDescription);
let CS = new MenuItem('Crystal Shrimp', '$5', CSpic, CSDescription);
let FPT = new MenuItem('Five Pickled Treasures', '$5', FPTpic, FPTDescription);
let FMP = new MenuItem('Fragrant Mashed Potatoes', '$5', FMPpic, FMPDescription);
let CGI = new MenuItem('Come and Get It', '$5', CGIpic, CGIDescription);
// let  = new MenuItem('', '$5', Pic, Description);

menuObjectArray = [AT, BPS, CCP, CS, FPT, FMP, CGI];

function addToMenu(menuObjectArray){
    for (let i = 0; i < menuObjectArray.length; i++){
        let newItem = createMenuDiv(menuObjectArray[i]);
        menu.appendChild(newItem);
    }
}

addToMenu(menuObjectArray);

export default menu;
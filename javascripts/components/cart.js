import bread from './bread.js';
import meat from './meat.js';
import cheese from './cheese.js';
import condiments from './condiments.js';
import veggies from './veggies.js'
import util from '../helpers/util.js';


const sandwich = {
   items: [], 
   price: 0
};

let cart = [];

const addToCart = (ingredient) => {
  cart.push(ingredient);
  util.cartBuilder(cart);
};

const addToOrder = (e) => {
sandwich.items.push(e.target.nextSibling.textContent);
const breadInfo = bread.getBread(); 
//getting the bread array
for(let i = 0; i < breadInfo.length; i++) {
console.log(e.target.id,breadInfo[i].key);
  if (e.target.id === breadInfo[i].key) {
    sandwich.price += breadInfo[i].value;
  };
};
addToCart(sandwich);
util.cartBuilder(cart);
};

//if the e.target.id bre

// const printToCart = () => {
// let domString = `<p>${sandwich.items}</p>`;
// // printToDom('cart', domString);
// };

const collectIngredients = (e) => {
  e.preventDefault();
  cart = [];
  bread.getBread();
  meat.getMeat();
  condiments.getCondiments();
  cheese.getCheese();
  veggies.getVeggies();
  // makereceipt();
  };
  
  export default { addToOrder, collectIngredients };
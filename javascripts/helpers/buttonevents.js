// import bread from '../components/bread.js';
import cart from '../components/cart.js';
import meat from '../components/meat.js';
import cheese from '../components/cheese.js';
import condiments from '../components/condiments.js';
import veggie from '../components/veggies.js';

const breadbtns = document.getElementsByClassName('bread-item');
const meatInfo = document.getElementById('meat');
const cheeseInfo = document.getElementById('cheese');
const condimentInfo = document.getElementById('condiment');
const veggieInfo = document.getElementById('veggie');
// const orderButton = document.getElementById('orderButton');

const orderButton = () => {
  for(let i = 0; i < breadbtns.length; i += 1) {
    breadbtns[i].addEventListener('click', cart.addToOrder)
  };
//   breadbtns.forEach((item) => {
// item.addEventListener('click', cart.addToOrder);
//   });
  // breadInfo.addEventListener('click', bread.getBread);
  meatInfo.addEventListener('click', meat.getMeat);
  cheeseInfo.addEventListener('click', cheese.getCheese);
  condimentInfo.addEventListener('click', condiments.getCondiments);
  veggieInfo.addEventListener('click', veggie.getVeggies);
};



export default { orderButton };
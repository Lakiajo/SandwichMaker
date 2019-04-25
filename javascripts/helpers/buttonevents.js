import bread from '../components/bread.js';
import meat from '../components/meat.js';
import cheese from '../components/cheese.js';
import condiment from '../components/condiments.js';
import veggie from '../components/veggies.js';

const breadInfo = document.getElementById('bread');
const meatInfo = document.getElementById('meat');
const cheeseInfo = document.getElementById('cheese');
const condimentInfo = document.getElementById('condiment');
const veggieInfo = document.getElementById('veggie');
const orderButton = document.getElementById('orderButton');

const orderButton = () => {
  breadInfo.addEventListener('click', bread.getBread);
  meatInfo.addEventListener('click', meat.getMeat);
  cheeseInfo.addEventListener('click', cheese.getCheese);
  condimentInfo.addEventListener('click', condiment.getCondiment);
  veggieInfo.addEventListener('click', veggie.getVeggie);
};

export default { orderButton };
import bread from '../helpers/bread.js';
import util from '../helpers/util.js';

const addToCartEvent = (e) => {
    e.preventDefault();
    const getBread = bread.getBread();
    cart.setCart(getBread);
    cart.cartToDom();
    // console.log('book:', bookInfo);
};

const makeStore = () => {
    const breadInfo = bread.getBread();
let domString = '<h2>Our Sandwich<h2>';
domString += `<h3>${bread.price}</h3>`;
// domString += `<img class="bookcover" src=${bread.image} alt="book cover">`;
domString += `<button id="cartbutton" class="btn btn-danger">Add to Cart</button>`;
util.printToDom('store-container',domString);
document.getElementById('cartbutton').addEventListener('click',addToCartEvent);
};

export default { makeStore };
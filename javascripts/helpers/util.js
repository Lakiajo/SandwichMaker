const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

let cart = [];

const addToCart = (ingredient) => {
  cart.push(ingredient);
  cartBuilder(cart);
};

const cartBuilder = (array) => {
  let domString = '';
  array.forEach((item) => {
    domString += `<div class="d-flex justify-content-between">`
    domString += `<div>${item.type}</div>`
    domString += `<div>${item.price}</div>`
    domString += `</div>`
  })
  printToDom('cart', domString);
};


export default { addToCart };
  
  
  
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const cartBuilder = (sandwich) => {
  let domString = '';
  sandwich.forEach((item) => {
    domString += `<div class="d-flex justify-content-between">`
    domString += `<div>${item.items}</div>`
    domString += `<div>${item.price}</div>`
    domString += `</div>`
  })
  printToDom('cart', domString);
};


export default { cartBuilder };
  
  
  
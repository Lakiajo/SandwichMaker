const collectIngredients = (e) => {
  e.preventDefault();
  cart = [];
  selectBread();
  selectMeat();
  selectCondiments();
  selectCheese();
  seclectVeggies();
  makereceipt();
  };
  
  export default { collectIngredients };
import print from '../helpers/util.js'

const breadInfo = {
        Italian: 1.50,
        HoneyOat: 1.50,
        Rye: 1.50,
        Wheat: 1.50,
        Sourdough: 1.50,
        Lettucewich: 2.50,
};

const getBread = (e) => {
  const selection = e.target.selection;
  const pickBread = e.target.id;
    // return breadInfo;
if(selection) {
    let ingredient = {};
    ingredient.type = pickBread;
    ingredient.price = bread[pickBread];
    print.addToCart(ingredient);
};
};

export default { getBread };
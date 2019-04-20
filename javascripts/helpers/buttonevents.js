import bread from './bread.js';

let sandwich = [];

const submitButton = () => {
// console.log('submitButton');
    document.getElementById('submitButton').addEventListener('click', makeSandwich);

}

export default { submitButton };
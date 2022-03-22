import { getCryptids } from './fetch-utils.js';
import { renderCryptids } from './render-utils.js';

// import functions and grab DOM elements
const cryptidContainer = document.querySelector('.cryptids');
// let state
let allCryptids = [];
// set event listeners 

window.addEventListener('load', async () => {
  
    allCryptids = await getCryptids();

    for (let cryptid of allCryptids) {
        

      
        const cryptidEl = renderCryptids(cryptid);
        cryptidContainer.append(cryptidEl);

    };


});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

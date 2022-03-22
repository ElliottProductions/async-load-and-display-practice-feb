import { getCryptids, getUtensils } from './fetch-utils.js';
import { renderCryptids, renderUtensils } from './render-utils.js';

// import functions and grab DOM elements
const cryptidContainer = document.querySelector('.cryptids');
const utensilContainer = document.querySelector('.utensils');
// let state
let allCryptids = [];
let allUtensils = [];
// set event listeners 

window.addEventListener('load', async () => {
  
    allCryptids = await getCryptids();

    fetchAndDisplayCryptids(allCryptids);

    allUtensils = await getUtensils();

    fetchAndDisplayUtensils(allUtensils);



    


});

function fetchAndDisplayCryptids(allCryptids){
    for (let cryptid of allCryptids) {
      
        const cryptidEl = renderCryptids(cryptid);
        cryptidContainer.append(cryptidEl);

    }
}

function fetchAndDisplayUtensils(allUtensils){
    for (let utensil of allUtensils) {
        const utensilEl = renderUtensils(utensil);
        utensilContainer.append(utensilEl);

    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

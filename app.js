import { getCryptids, getUtensils, getSpaceships } from './fetch-utils.js';
import { renderCryptids, renderUtensils, renderSpaceships } from './render-utils.js';

// import functions and grab DOM elements
const cryptidContainer = document.querySelector('.cryptids');
const utensilContainer = document.querySelector('.utensils');
const spaceshipContainer = document.querySelector('.spaceships');
const fruitContainer = document.querySelector('.fruits');
// let state
let allCryptids = [];
let allUtensils = [];
let allSpaceships = [];
let allFruits = [];
// set event listeners 

window.addEventListener('load', async () => {
  
    allCryptids = await getCryptids();

    fetchAndDisplayCryptids(allCryptids);

    allUtensils = await getUtensils();

    fetchAndDisplayUtensils(allUtensils);

    allSpaceships = await getSpaceships();
    
    fetchAndDisplaySpaceships(allSpaceships);

    allFruits = await getFruits();
    
    fetchAndDisplayFruits(allFruits);



    


});

function fetchAndDisplaySpaceships(allSpaceships){
    for (let ship of allSpaceships) {

        const spaceshipEl = renderSpaceships(ship);

        spaceshipContainer.append(spaceshipEl);
    }
}
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

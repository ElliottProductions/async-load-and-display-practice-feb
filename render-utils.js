export function renderCryptids(cryptid){

    const cryptidCardEl = document.createElement('div');
    cryptidCardEl.classList.add('list-card');

    const namesEl = document.createElement('h4');
    const sightingsEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const isDangerousEl = document.createElement('p');

    namesEl.textContent = `${cryptid.names}`;
    sightingsEl.textContent = `Total sightings: ${cryptid.sightings}+`;
    typeEl.textContent = `Type: ${cryptid.type}`;
    isDangerousEl.textContent = `Is Dangerous: ${cryptid.is_dangerous}`;
    
    cryptidCardEl.append(namesEl, sightingsEl, typeEl, isDangerousEl);
  

    return cryptidCardEl;

}

    
export function renderUtensils(utensil){

    const utensilsCardEl = document.createElement('div');
    //utensilsCardEl.classList.add('list-card');
    
    const namesEl = document.createElement('h4');
    const isSharpEl = document.createElement('p');
    const variationsEl = document.createElement('p');
    const isSpork = document.createElement('p');
    
    namesEl.textContent = `${utensil.name}`;
    isSharpEl.textContent = `Is it sharp?: ${utensil.is_sharp}`;
    variationsEl.textContent = `Variations: ${utensil.variations}`;
    isSpork.textContent = `Is it a Spork?: ${utensil.is_spork}`;

    
        
    utensilsCardEl.append(namesEl, isSharpEl, variationsEl, isSpork);

    console.log(utensilsCardEl);
    
    return utensilsCardEl;
    
    
    
}
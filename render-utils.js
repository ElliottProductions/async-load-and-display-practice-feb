export function renderCryptids(cryptid){

    const cryptidCardEl = document.createElement('div');
    cryptidCardEl.classList.add('list-card');

    const namesEl = document.createElement('h3');
    const sightingsEl = document.createElement('p');
    const typeEl = document.createElement('p');
    const isDangerousEl = document.createElement('p');

    namesEl.textContent = `Known as: ${cryptid.names}`;
    sightingsEl.textContent = `Total sightings: ${cryptid.sightings}`;
    typeEl.textContent = `Type: ${cryptid.type}`;
    isDangerousEl.textContent = `Is Dangerous: ${cryptid.is_dangerous}`;
    
    cryptidCardEl.append(namesEl, sightingsEl, typeEl, isDangerousEl);
    console.log(namesEl);

    return cryptidCardEl;



}
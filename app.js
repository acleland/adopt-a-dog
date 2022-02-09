import { getDogs } from './fetch-utils.js';
import { renderDogCard } from './render-utils.js';

const dogListContainer = document.getElementById('dog-list-container');


// on load
window.addEventListener('load', async function(){
    const dogs = await getDogs();
    for (let dog of dogs) {
        dogListContainer.append(renderDogCard(dog));
    }
});

// fetch all dogs
// render and append all dog cards to the container

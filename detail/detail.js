import { getDog } from '../fetch-utils.js';
import { renderDogDetail } from '../render-utils.js';

const dogDetailContainer = document.getElementById('dog-detail-container');

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
// on load
window.addEventListener('load', async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    console.log(id);
});
// get the id from URL
// use the id to fetch the dog
// render and append this dog's details to the container

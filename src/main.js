import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let simpleLightbox = new SimpleLightbox('.gallery a');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = event.target.elements.searchQuery.value.trim();

    if (!query) {
        iziToast.error({ title: 'Error', message: 'Search query cannot be empty!' });
        return;
    }

    loader.style.display = 'block'; 
    clearGallery(gallery);

    fetchImages(query)
        .then(data => {
            const { hits } = data;
            console.log(hits)
            
            if (hits.length === 0) {
                iziToast.warning({ message: 'No images found. Try another query.' });
                return;
            }

            gallery.innerHTML = renderImages(hits); 
            simpleLightbox.refresh();
        })
        .catch(error => {
            iziToast.error({ title: 'Error', message: error.message });
        })
        .finally(() => {
            loader.style.display = 'none';
        });
});

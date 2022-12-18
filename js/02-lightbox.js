import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => `<a href="${original}" class="gallery__item"><img src="${preview}" data-source = "${original}" alt="${description}" class="gallery__image"></a>`).join('')
gallery.insertAdjacentHTML('afterbegin', markup)
// new SimpleLightbox(markup, { /* options */ });
    new SimpleLightbox('.gallery', { /* options */ });

gallery.addEventListener('click', evt => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    } 
    const largeUrl = evt.target.dataset.source;

    
})

console.log(galleryItems);

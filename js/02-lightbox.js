import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => `<a href="${original}" class="gallery__item"><img src="${preview}" data-source = "${original}" alt="${description}" class="gallery__image"></a>`).join('')
gallery.insertAdjacentHTML('afterbegin', markup);


const slider = new SimpleLightbox('.gallery__item');
slider.next()


gallery.addEventListener('click', evt => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }        
})

console.log(galleryItems);

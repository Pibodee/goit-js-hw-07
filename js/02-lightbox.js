import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => `<li><a href="${original}" class="gallery__item"><img src="${preview}" data-source = "${original}" alt="${description}" class="gallery__image"></a></li>`).join('')
gallery.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: `250`,
  captionPosition: `bottom`
});


console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item"><a href="${original}" class="gallery__link"><img src="${preview}" data-source = "${original}" alt="${description}" class="gallery__image"></a></div>`).join('')
gallery.insertAdjacentHTML('afterbegin', markup)

gallery.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (!evt.target.classList.contains('gallery__image')) {
        return
    } 
    const largeUrl = evt.target.dataset.source;
    const largeImg = basicLightbox.create(`<img src = ${largeUrl} width 800 height 600>`)
    largeImg.show()

    const link = document.querySelectorAll('.gallery__link')

    link.forEach(opened => {
        if (opened.getAttribute('href') == largeUrl) {
            opened.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    largeImg.close()
                }return
            })
        }
    })
})


// console.log(galleryItems);

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

    const links = document.querySelectorAll('.gallery__link')

    links.forEach(link => {
        if (link.getAttribute('href') === largeUrl) {
            link.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    largeImg.close()
                }return
            })
        }
    })
})


console.log(galleryItems);

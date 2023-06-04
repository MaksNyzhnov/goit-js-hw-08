// Add imports above this line
import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Change code below this line

let galleryListEl = document.querySelector('.gallery')



function galleryItemsMarkUp(array) {

    const elements = array.map(item => {
    
        const galleryItemEL = document.createElement('li')
        const gelleryImageEl = document.createElement('img')
        const galleryLinkEl = document.createElement('a')
        


        galleryItemEL.classList.add('gallery__item')

        galleryLinkEl.classList.add('gallery__link')
        galleryLinkEl.href = item.original

        gelleryImageEl.classList.add('gallery__image')
        gelleryImageEl.src = item.preview
        gelleryImageEl.alt = item.description

        galleryLinkEl.appendChild(gelleryImageEl)
        galleryItemEL.appendChild(galleryLinkEl)

        return galleryItemEL
    });
    galleryListEl.append(...elements)
}

galleryItemsMarkUp(galleryItems)

galleryListEl = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, fadeSpeed: 350})


const backDropEl = galleryListEl.domNodes.wrapper
     backDropEl.style.backgroundColor = "rgba(0, 0, 0, 0.6)"

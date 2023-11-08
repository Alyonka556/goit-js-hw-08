import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

    const galleryContainer = document.querySelector('.gallery');
    const galleryCardsSet = createGallery(galleryItems);
    
    function createGallery(galleryItems) {
        return galleryItems
        .map(({preview, original, description}) => {
            return `<div class="gallery__item" style= "border-radius: 5%; box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
            7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                style= "border-radius: 5%; box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
                7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1)"
              />
            </a>
           </div>`;   
        })
        .join('');
    }
    
    galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);

  const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });

//   console.log(lightbox);
  console.log(galleryItems);


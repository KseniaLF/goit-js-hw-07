import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

addMarcup(galleryItems);

function addMarcup(arr) {
    const murcup = arr.map(imgEl => ` 
    <a class="gallery__item" href="${imgEl.original}"
    title="${imgEl.description}">
        <img class="gallery__image" src="${imgEl.preview}"
        alt="${imgEl.description}" />
    </a>
    `).join('');
    galleryContainer.innerHTML = murcup;
}

galleryContainer.addEventListener("click", fnClick)

function fnClick(event) {
    event.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a',
    {captionsData:'alt', captionDelay:250
 });
// 
import { galleryItems } from './gallery-items.js';

// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

addMarcup(galleryItems);


function addMarcup(arr) {
    const murcup = arr.map(imgEl => `
    <div class="gallery__item">
        <a class="gallery__link" href="${imgEl.original}">
            <img
            class="gallery__image"
            src="${imgEl.preview}"
            data-source="${imgEl.original}"
            alt="${imgEl.description}"
            />
        </a>
    </div>
    `).join('');
    galleryContainer.innerHTML = murcup;
}

galleryContainer.addEventListener("click", fnClick)

function fnClick(event) {
    event.preventDefault();

    if (!event.target.dataset.source) {
        return
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
    // console.log(instance)
    instance.show()
}





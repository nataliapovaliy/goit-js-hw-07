import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
// import * as basicLightbox from 'basiclightbox';

const listGallery = document.querySelector(".gallery");

const listImage = galleryItems
listImage.map(item => {
    const listGalleryElement = document.createElement('div');
    listGalleryElement.className = "gallery__item";
    listGallery.append(listGalleryElement);

    const listGalleryElementLink = document.createElement('a');
    listGalleryElementLink.className = "gallery__link";
    listGalleryElementLink.href = `${item.original}`;
    // listGalleryElementLink.target = "_blank";
    listGalleryElement.append(listGalleryElementLink);

    const listGalleryElementImg = document.createElement('img');
    listGalleryElementImg.className = "gallery__image";
    listGalleryElementImg.src = `${item.preview}`;
    listGalleryElementImg.alt = `${item.description}`;
    listGalleryElementImg.dataset.source = `${item.original}`;
    listGalleryElementLink.append(listGalleryElementImg);
});

const arrGalleryItem = Array.from(listGallery.children);

arrGalleryItem.forEach((el) => {
    el.addEventListener("click", (event) => {
        const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
    instance.show()
        
        el.addEventListener("keydown", (evt) => {
            if (evt.code === "Escape") { instance.close(); }
    })
    }) 
})




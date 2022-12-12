import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const listGallery = document.querySelector(".gallery");

const listImage = galleryItems
listImage.map(item => {
    const listGalleryElement = document.createElement('div');
    listGalleryElement.className = "gallery__item";
    listGallery.append(listGalleryElement);

    const listGalleryElementLink = document.createElement('a');
    listGalleryElementLink.className = "gallery__link";
    listGalleryElementLink.href = `${item.original}`;
    listGalleryElementLink.target = "_blank";
    listGalleryElement.append(listGalleryElementLink);

    const listGalleryElementImg = document.createElement('img');
    listGalleryElementImg.className = "gallery__image";
    listGalleryElementImg.src = `${item.preview}`;
    listGalleryElementImg.alt = `${item.description}`;
    listGalleryElementImg.dataset.source = `${item.original}`;
    listGalleryElementLink.append(listGalleryElementImg);
});

listGallery.addEventListener("click", selectImg);

function selectImg(event) {
    import * as basicLightbox from 'basiclightbox'
const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)
instance.show()
}

//  <div class="gallery">
//       <div class="gallery__item">
//         <a class="gallery__link" href="large-image.jpg">
//           <img
//             class="gallery__image"
//             src="small-image.jpg"
//             data-source="large-image.jpg"
//             alt="Image description"
//           />
//         </a>
//       </div>
//     </div> 
import { galleryItems } from './gallery-items.js';
// Change code below this line

let GalleryEl = document.querySelector('.gallery');
const photo = galleryItems.map(({preview, original, description}) => { 
    return `<div class = 'gallery__item'>
    <a class = 'gallery__link' href = '${original}'>
    <img class = 'gallery__image' src = '${preview}' data-source = '${original}' alt = '${description}'/>
    </a>
    </div>`})
    .join('');
GalleryEl.innerHTML = photo

GalleryEl.addEventListener('click', onOpenModal)

function onOpenModal(event){
    event.preventDefault();
    if (event.target.nodeName !== 'IMG'){
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
` ,
    {
    onShow: () => {
      window.addEventListener('keydown', onKeydownEsc);
    },
    onClose: () => {
      window.removeEventListener('keydown', onKeydownEsc);
    },
  },
);

const onKeydownEsc = event => {
  if (event.code === 'Escape') {
    instance.close();
  }
};

instance.show();
}







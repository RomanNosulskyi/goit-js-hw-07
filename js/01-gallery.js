import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryEl = [];

galleryItems.map((galleryItem) => {
  const div = document.createElement("div");
  div.classList.add("gallery__item");

  const a = document.createElement("a");
  a.classList.add("gallery__link");
  a.href = galleryItem.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.dataset.source = galleryItem.original;
  img.alt = galleryItem.description;

  a.append(img);
  div.append(a);

  galleryEl.push(div);
});

gallery.append(...galleryEl);
gallery.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  openModal(event.target.dataset.source);
}

let instanceRef;

function openModal(largeImgUrl) {
  const instance = basicLightbox.create(
    `
		<img src="${largeImgUrl}">
	`,
    {
      onShow: onShowModal,
      onClose: onCloseModal,
    }
  );
  instance.show();
  instanceRef = instance;
}
function onShowModal() {
  document.addEventListener("keydown", onEscBtn);
}
function onCloseModal() {
  document.removeEventListener("keydown", onEscBtn);
}

function onEscBtn(event) {
  if (event.key === "Escape") {
    instanceRef.close();
  }
}

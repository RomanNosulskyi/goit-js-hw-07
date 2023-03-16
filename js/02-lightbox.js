import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryEl = [];

galleryItems.map((galleryItem) => {
  const a = document.createElement("a");
  a.classList.add("gallery__image");
  a.href = galleryItem.original;

  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = galleryItem.preview;
  img.alt = galleryItem.description;

  a.append(img);
  galleryEl.push(a);
});

gallery.append(...galleryEl);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

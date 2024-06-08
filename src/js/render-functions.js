

export function imagesTemplate(images) {
   return images.map((image) => {
       return `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
    <ul class="image-info">
    <li class="info-item"><div class="item-text">Likes</div><div class="item-value">${image.likes}</div></li>
    <li class="info-item"><div class="item-text">Views</div><div class="item-value">${image.views}</div></li>
    <li class="info-item"><div class="item-text">Comments</div><div class="item-value">${image.comments}</div></li>
    <li class="info-item"><div class="item-text">Downloads</div><div class="item-value">${image.downloads}</div></li>
    </ul>
  </a>
</li>`
    }).join("");
}




import { searchImage } from "./js/pixabay-api";
import { imagesTemplate } from "./js/render-functions";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const formEL = document.querySelector(".form");
const galleryList = document.querySelector(".gallery");
const loaderEl = document.querySelector(".loader");

const galleryModel = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

formEL.addEventListener("submit", evt => {
    evt.preventDefault();
    const InputValue = evt.target.elements.search.value.trim();
    if (InputValue === "") {
      return  
    };
    evt.target.reset();
    loaderEl.classList.remove("is-hiding");
    searchImage(InputValue).then(data => {
        // console.log(data);
        if (data.total === 0) {
         iziToast.show({
              message: 'Sorry, there are no images matching your search query. Please try again!',
              messageColor: 'white',
              backgroundColor: 'red',
             position: 'topRight',
          });
        }
        const markup = imagesTemplate(data.hits);
        galleryList.innerHTML = markup;
        galleryModel.refresh();
    }).catch(error => {
        // console.log(error);
        iziToast.show({
            message: 'Internal server error!',
            messageColor: 'white',
            backgroundColor: 'red',
            position: 'topRight',
        })
          
    }).finally(() => {
        loaderEl.classList.add("is-hiding");
            });
   
});



     
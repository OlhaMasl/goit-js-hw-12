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
const loadMore = document.querySelector(".load-more-btn");

const galleryModel = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
});

let page = 1;


formEL.addEventListener("submit", onSubmitForm);
   
function onSubmitForm(evt) {
    evt.preventDefault();
    const InputValue = evt.target.elements.search.value.trim();
    if (InputValue === "") {
      return  
    };
    evt.target.reset();
    loaderEl.classList.remove("is-hiding");
    searchImage(InputValue, page).then(data => {
        console.log(data);
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
        loadMore.classList.remove("is-hiding");
            });
    return InputValue;
};

let inputData = "cats";

loadMore.addEventListener("click", onClickLoadMore);

async function onClickLoadMore() {
    page += 1;
    loadMore.disabled = true;

    try {
        const data = await searchImage(inputData, page);
        console.log(data);
        galleryList.insertAdjacentHTML("beforeend", imagesTemplate(data.hits));
        galleryModel.refresh();
        if (page >= 34) {
            loadMore.classList.add("is-hiding");
            iziToast.show({
              message: "We are sorry, but you've reached the end of search results.",
              messageColor: "black",
              backgroundColor: "lightblue",
             position: "topRight",
          });
        }
        const card = document.querySelector(".gallery-item");
        const cardHeight = card.getBoundingClientRect().height;
        window.scrollBy({
            left: 0,
            top: cardHeight *2,
            behavior: "smooth",
        })
    } catch(error) {

    } finally {
        loadMore.disabled = false;
    }

}



     
import{a as v,S as L,i as c}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();async function g(i,e){const r="https://pixabay.com/api/",l=new URLSearchParams({key:"44175517-753270956c641713e32eb091d",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}),t=`${r}?${l}`;return(await v(t)).data}function h(i){return i.map(e=>`<li class="gallery-item">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-image"
      src="${e.webformatURL}"
      alt="${e.tags}"
    />
    <ul class="image-info">
    <li class="info-item"><div class="item-text">Likes</div><div class="item-value">${e.likes}</div></li>
    <li class="info-item"><div class="item-text">Views</div><div class="item-value">${e.views}</div></li>
    <li class="info-item"><div class="item-text">Comments</div><div class="item-value">${e.comments}</div></li>
    <li class="info-item"><div class="item-text">Downloads</div><div class="item-value">${e.downloads}</div></li>
    </ul>
  </a>
</li>`).join("")}const b=document.querySelector(".form"),f=document.querySelector(".gallery"),d=document.querySelector(".loader"),o=document.querySelector(".load-more-btn"),p=new L(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let n=null,a=null,m;b.addEventListener("submit",w);function w(i){i.preventDefault(),a=1,n=i.target.elements.search.value.trim(),n!==""&&(i.target.reset(),d.classList.remove("is-hiding"),g(n,a).then(e=>{e.total===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});const r=h(e.hits);f.innerHTML=r,p.refresh(),m=Math.ceil(e.totalHits/e.hits.length),m>1&&o.classList.remove("is-hiding")}).catch(e=>{c.show({message:"Internal server error!",messageColor:"white",backgroundColor:"red",position:"topRight"})}).finally(()=>{d.classList.add("is-hiding")}))}o.addEventListener("click",y);async function y(){a+=1,o.disabled=!0,d.classList.remove("is-hiding");try{const i=await g(n,a);f.insertAdjacentHTML("beforeend",h(i.hits)),p.refresh(),a>=m&&(o.removeEventListener("click",y),o.classList.add("is-hiding"),c.show({message:"We are sorry, but you've reached the end of search results.",messageColor:"black",backgroundColor:"lightblue",position:"topRight"}));const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}catch{c.show({message:"Internal server error!",messageColor:"white",backgroundColor:"red",position:"topRight"})}finally{o.disabled=!1,d.classList.add("is-hiding")}}
//# sourceMappingURL=commonHelpers.js.map

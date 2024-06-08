import{a as h,S as p,i as c}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function u(s,e){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"44175517-753270956c641713e32eb091d",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}),t=`${r}?${i}`;return(await h(t)).data}function m(s){return s.map(e=>`<li class="gallery-item">
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
</li>`).join("")}const y=document.querySelector(".form"),f=document.querySelector(".gallery"),d=document.querySelector(".loader"),a=document.querySelector(".load-more-btn"),g=new p(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});let l=1;y.addEventListener("submit",v);function v(s){s.preventDefault();let e=s.target.elements.search.value.trim();if(e!=="")return s.target.reset(),d.classList.remove("is-hiding"),u(e,l).then(r=>{console.log(r),r.total===0&&c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});const i=m(r.hits);f.innerHTML=i,g.refresh()}).catch(r=>{c.show({message:"Internal server error!",messageColor:"white",backgroundColor:"red",position:"topRight"})}).finally(()=>{d.classList.add("is-hiding"),a.classList.remove("is-hiding")}),e}let L="cats";a.addEventListener("click",b);async function b(){l+=1,a.disabled=!0;try{const s=await u(L,l);console.log(s),f.insertAdjacentHTML("beforeend",m(s.hits)),g.refresh(),l>=34&&(a.classList.add("is-hiding"),c.show({message:"We are sorry, but you've reached the end of search results.",messageColor:"black",backgroundColor:"lightblue",position:"topRight"}));const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:r*2,behavior:"smooth"})}catch{}finally{a.disabled=!1}}
//# sourceMappingURL=commonHelpers.js.map

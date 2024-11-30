import{S as u,i as a}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const f="27098519-4ca44ecc916e4addacc368c49",m="https://pixabay.com/api/";function p(s,t=1,i=40){const o=`${m}?key=${f}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true&page=${t}&per_page=${i}`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()})}function y(s){return s.map(({webformatURL:t,largeImageURL:i,tags:o,likes:e,views:r,comments:n,downloads:d})=>`
      <a href="${i}" class="gallery-item">
          <img src="${t}" alt="${o}" loading="lazy" />
          <div class="info">
            <div class="likes">
              <b>Likes</b>
              <p>${e}</p>
            </div>
            <div class="views">
              <b>Views</b>
              <p>${r}</p>
            </div>
            <div class="comments">
              <b>Comments</b>
              <p>${n}</p>
            </div>
            <div class="downloads">
              <b>Downloads</b>
              <p>${d}</p>
            </div>
          </div>
      </a>
  `).join("")}function g(s){s.innerHTML=""}const h=document.querySelector("#search-form"),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let b=new u(".gallery a");h.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.searchQuery.value.trim();if(!t){a.error({title:"Error",message:"Search query cannot be empty!"});return}l.style.display="block",g(c),p(t).then(i=>{const{hits:o}=i;if(console.log(o),o.length===0){a.warning({message:"No images found. Try another query."});return}c.innerHTML=y(o),b.refresh()}).catch(i=>{a.error({title:"Error",message:i.message})}).finally(()=>{l.style.display="none"})});
//# sourceMappingURL=index.js.map

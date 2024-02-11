import{S as l,i as c}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=new l(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250}),m=a=>{const n=document.querySelector(".images__cont");let s="";a.hits.map(o=>{s+=`<a href="${o.largeImageURL}" class="imagecont">
        <div class="imagephoto">
            <img src="${o.webformatURL}" alt="${o.tags}">
        </div>
        <span class="imageinfo">
            <span>
                <span>Likes</span><span>${o.likes}</span>
            </span>
            <span>
                <span>Views</span><span>${o.views}</span>
            </span>
            <span>
                <span>Comments</span><span>${o.comments}</span>
            </span>
            <span>
                <span>Downloads</span><span>${o.downloads}</span>
            </span>
        </span>
    </a>`}),n.innerHTML=s,p.refresh()},d=(a,n)=>{const s=document.querySelector(".images__cont");s.innerHTML='<span class="loader"></span>';const o="https://pixabay.com/api/",e={method:"GET"},t=new URLSearchParams({key:"42320940-042fd388efe736bb4087979b1",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${t}`;fetch(i,e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.total===0?(s.innerHTML="",n.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",messageColor:"white",theme:"dark",iconUrl:"./img/error.svg"})):m(r)}).catch(r=>{s.innerHTML="",n.show({message:r,position:"topRight",backgroundColor:"red",messageColor:"white",theme:"dark",iconUrl:"./img/error.svg"})})},g=document.querySelector(".form");g.addEventListener("submit",a=>{a.preventDefault();const n=a.target,s=n.elements.field.value;s?(d(s,c),n.reset()):c.show({message:"Please, fill an input",position:"topRight",backgroundColor:"red",messageColor:"white",theme:"dark",iconUrl:"../img/error.svg"})});
//# sourceMappingURL=commonHelpers.js.map

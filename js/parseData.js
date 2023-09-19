import { website } from './data.js';

const indexParse = ()=>{

    const container = document.querySelector('#portfolioGrid');
    let size = window.innerWidth <= 768 ? 3 : 6; // 화면이 모바일 크기일 때 3개의 아이템을 불러옵니다.
// Use a for loop and iterate backwards
for (let i = website.length - 1; i >= website.length - size; i--) {
    const site = website[i];
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item', 'col-lg-4', 'col-md-6', site.type);

    const figure = document.createElement('figure');
    figure.classList.add('picture-item', 'img-block', 'shine-effect', 'image-zoom', 'port-v2');

    const img = document.createElement('img');
    img.src = "https://s0.wp.com/mshots/v1/" + site.url; // Set image URL as you suggested
    img.alt = "portfolio image";

    const figcaption = document.createElement('figcaption');
    const div = document.createElement('div');
    div.classList.add('link-box');
    
    const a1 = document.createElement('a');
    a1.href = site.url;

    const span1 = document.createElement('span');
    span1.classList.add('icon-heart');
    const srOnly1 = document.createElement('span');
    srOnly1.classList.add('sr-only');
    srOnly1.textContent = "&";
    span1.appendChild(srOnly1);
    a1.appendChild(span1);

    const a2 = document.createElement('a');
    a2.href = site.url;
    const span2 = document.createElement('span');
    span2.classList.add('icon-link');
    const srOnly2 = document.createElement('span');
    srOnly2.classList.add('sr-only');
    srOnly2.textContent = "&";
    span2.appendChild(srOnly2);
    a2.appendChild(span2);
    
    // div.appendChild(a1);
    div.appendChild(a2);
    figcaption.appendChild(div);

    figure.appendChild(img);
    figure.appendChild(figcaption);
    galleryItem.appendChild(figure);
    container.appendChild(galleryItem);
}

}


//포폴용


const portParse = ()=>{



const container = document.querySelector('.masonary-block');


for (let i = website.length - 1; i >= 0; i--) {
    const site = website[i];
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item', 'col-lg-6', 'col-xl-4', site.type);

    const figure = document.createElement('figure');
    figure.classList.add('caption-hover-full');

    const a = document.createElement('a');
    a.classList.add('fancy-pop');
    a.href = site.url;

    const imageWrapper = document.createElement('div');
    imageWrapper.classList.add('image-wrapper');

    const img = document.createElement('img');
    img.src = "https://s0.wp.com/mshots/v1/" + site.url; 
    img.alt = "images description";
    imageWrapper.appendChild(img);

    const imageDetails = document.createElement('div');
    imageDetails.classList.add('image-details');

    const figcaption = document.createElement('div');
    figcaption.classList.add('figcaption');

    const trigger = document.createElement('div');
    trigger.classList.add('trigger');
    const customIconPlus = document.createElement('div');
    customIconPlus.classList.add('custom-icon-plus');
    const srOnly = document.createElement('span');
    srOnly.classList.add('sr-only');
    srOnly.textContent = " ";
    customIconPlus.appendChild(srOnly);
    trigger.appendChild(customIconPlus);

    const info = document.createElement('div');
    info.classList.add('info');
    const h2 = document.createElement('h2');
    h2.classList.add('content-title');
    h2.textContent = site.client;  // replace with site.title if available
    info.appendChild(h2);
    const h4 = document.createElement('h4');
    h4.classList.add('content-date');   
    h4.textContent = site.date; 
    info.appendChild(h4); 

    figcaption.appendChild(trigger);
    figcaption.appendChild(info);
    imageDetails.appendChild(figcaption);

    figure.appendChild(a);
    figure.appendChild(imageWrapper);
    figure.appendChild(imageDetails);

    galleryItem.appendChild(figure);
    container.appendChild(galleryItem);
}

}



if(window.location.pathname.includes('portfolios.html')) {
    portParse();
} else {
    indexParse();
}
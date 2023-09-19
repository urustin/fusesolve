import { language } from './textByLang.js';


// textReplace.js

let lang = navigator.language || navigator.userLanguage;

// 국가코드에서 앞 2글자만 자름
lang = lang.substr(0,2);

// const userLanguage = navigator.language || navigator.userLanguage; 
const currentPage = window.location.pathname.includes('about') ? 'about' : 'index'; // 현재 페이지 확인

if(lang === "ko") {
    let keys = Object.keys(language.ko[currentPage]);

    for(let i = 0; i < keys.length; i++) {
        if (document.getElementById(keys[i]) !== null) { // HTML element가 실제로 존재하는지 확인
            document.getElementById(keys[i]).innerHTML = language.ko[currentPage][keys[i]].replace(/\n/g, '<br/>');
        }
    }
} else {
    let keys = Object.keys(language.en[currentPage]);
    for(let i = 0; i < keys.length; i++) {
        if (document.getElementById(keys[i]) !== null) { // HTML element가 실제로 존재하는지 확인
            document.getElementById(keys[i]).innerHTML = language.en[currentPage][keys[i]].replace(/\n/g, '<br/>');
        }
    }
}

'use strict';

// 스크롤에 따른 메뉴바 색상처리
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const home = document.querySelector('.home__title');
const home2 = document.querySelector('.home__description');
const homeHeight = navbar.getBoundingClientRect().height;
console.log(navbarHeight);
document.addEventListener('scroll', () => {
    // console.log('이벤트가 발생되었음!');
    // console.log(window.scrollY);
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--bold');
    }else{
        navbar.classList.remove('navbar--bold');
    }
    if(window.scrollY > 200){
        uparrow.classList.add('up--arrow');
    }else{
        uparrow.classList.remove('up--arrow');
    }
    home.style.opacity = 1 - window.scrollY / homeHeight;
    home2.style.opacity = 1 - window.scrollY / homeHeight;
});

// 스크롤에 따른 메뉴바 고정
const navbarMeunu = document.querySelector('.navbar__menu');
navbarMeunu.addEventListener('click', (e) => {
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    // console.log(link);
    scrollIntoView(link);
});

const hp = document.querySelector('.home__contact');
hp.addEventListener('click', (e) => {
    scrollIntoView('#contact');
});

const uparrow = document.querySelector('#up__arrow');
uparrow.addEventListener('click', (e) => {
    scrollIntoView('#home');
});

function scrollIntoView(selecotor){
    const scrollTo = document.querySelector(selecotor);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
};

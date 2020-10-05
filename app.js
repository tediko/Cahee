// ---------------------- //
// HEADER FIXED ON SCROLL //
// ---------------------- //
const header = document.querySelector('.header');
const sectionOne = document.querySelector('.kv');
const headerOptions = {
    rootMargin: "-1px 0px 0px 0px",
};

const headerOnScroll = new IntersectionObserver((entry) => {
    entry.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('header--onScroll');

        } else {
            header.classList.remove('header--onScroll');
        }
    })
}, headerOptions);

headerOnScroll.observe(sectionOne);



// ---------------------- //
// -HEADER DROPDOWN MENU- //
// ---------------------- //
const menuBtn = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function() {
    if (menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
        mobileMenu.classList.remove('mobile-open');
    } else {
        menuBtn.classList.add('open');
        mobileMenu.classList.add('mobile-open');
    }
})


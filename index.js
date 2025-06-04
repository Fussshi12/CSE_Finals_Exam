const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.classList.remove('active');
        }
    });
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            if(entry.target.classList.contains('section')) {
                entry.target.classList.add('show');
            }
            if(entry.target.classList.contains('section1')) {
                entry.target.classList.add('show1');
            }
            if(entry.target.classList.contains('section2')) {
                entry.target.classList.add('show2');
            }
            if(entry.target.classList.contains('section3')) {
                entry.target.classList.add('show3');
            }
            if(entry.target.classList.contains('section4')) {
                entry.target.classList.add('show4');
            }
        } else {
            if(entry.target.classList.contains('section')) {
                entry.target.classList.remove('show');
            }
            if(entry.target.classList.contains('section1')) {
                entry.target.classList.remove('show1');
            }
            if(entry.target.classList.contains('section2')) {
                entry.target.classList.remove('show2');
            }
            if(entry.target.classList.contains('section3')) {
                entry.target.classList.remove('show3');
            }
            if(entry.target.classList.contains('section4')) {
                entry.target.classList.remove('show4');
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.section');
const hiddenElements1 = document.querySelectorAll('.section1');
const hiddenElements2 = document.querySelectorAll('.section2');
const hiddenElements3 = document.querySelectorAll('.section3');
const hiddenElements4 = document.querySelectorAll('.section4');

hiddenElements.forEach((el) => observer.observe(el));
hiddenElements1.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer.observe(el));
hiddenElements3.forEach((el) => observer.observe(el));
hiddenElements4.forEach((el) => observer.observe(el));
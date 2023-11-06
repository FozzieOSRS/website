//----------------------------------------
// WOM Data Import From Server
//----------------------------------------

async function fetchAndDisplay(url, containerId) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok ${response.statusText}`);
        }
        const text = await response.text();
        document.getElementById(containerId).textContent = text;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

fetchAndDisplay('https://admin.hallowedrs.com:3000/maxcombat.txt', 'maxcombat-container');
fetchAndDisplay('https://admin.hallowedrs.com:3000/maxtotal.txt', 'maxtotal-container');
fetchAndDisplay('https://admin.hallowedrs.com:3000/members.txt', 'members-container');


//----------------------------------------
// MOBILE MENU FUNCTIONALITY
//----------------------------------------

//Main Functionality

const primaryNav = document.querySelector('.nav-list-ul');
const navToggle = document.querySelector('.mobile-menu-toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
});

//Close Menu On Click (almost) Anywhere else functionalities

const main = document.querySelector('.main-content-area');
const headerClass = document.querySelector('.header');

main.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
});

headerClass.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
});

if (document.URL.includes('piety-points.html')) {
    const pietyDescription = document.querySelector('.description-section');
    pietyDescription.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute('data-visible');
    
        if (visibility === "true") {
            primaryNav.setAttribute("data-visible", false);
        }
    });
}


//Hide Nav Bar on scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const visibility = primaryNav.getAttribute('data-visible');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
    }
  } else {
    document.getElementsByClassName("navigation").style.transform = translateY(0);
  }
}


//----------------------------------------
// Fly-in Animations On Scroll
//----------------------------------------

//From Left

const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left');
        }
    });

});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

//From Right

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right');
        }
    });

});

const hiddenElementRight = document.querySelectorAll('.hidden-right');
hiddenElementRight.forEach((el) => observerRight.observe(el));


//----------------------------------------
// Load Hero Video Based on Screen Size
//----------------------------------------

var windowWidth = window.innerWidth;

if (windowWidth >1000) {

    var div = document.createElement('video')
    div.classList.add('desktop-hero')


    div.src = './Assets/HallowedSiteHero.mp4'
    div.muted = true;
    div.autoplay = true;
    div.loop = true;
    div.setAttribute('poster','./Assets/Lassar.webp')

    var box = document.getElementById('header');
    box.appendChild(div)
}


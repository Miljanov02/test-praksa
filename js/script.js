const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.home-text',{delay:350, origin:'left'})
sr.reveal('.home-img',{delay:350, origin:'right'})

sr.reveal('.sub-service,.about,.portfolio,.service,.cta,.contact',{delay:200, origin:'bottom'})

document.querySelector('.top-btn').addEventListener('click', function(event) {
    event.preventDefault(); // sprečava default ponašanje linka

    const link = document.createElement('a');
    link.href = 'img/MiljanJovanov_CV.pdf'; // zameni sa tačnim putem do tvog PDF fajla
    link.download = 'MJ_CV.pdf'; // ime fajla koje će biti preuzeto
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});




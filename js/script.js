/*==================================================alternar icone navbar==================================================*/
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

/*==================================================seleção ativa home==================================================*/
    let selection = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
    selection.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });

/*==================================================Navbar colada==================================================*/
    let header = document.querySelector('header');

    header.classList.toggle('colada', window.scrollY > 100);
    
/*==================================================remove alternar icone navbar quando clica no link navbar==================================================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/*==================================================rolagem ==================================================*/
ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000, 
    delay: 200
});

ScrollReveal().reveal('.home-conteudo, .cabecalho', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portifolio-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-conteudo h1, .sobre-imagem', { origin: 'left' });
ScrollReveal().reveal('.home-conteudo p, .sobre-conteudo', { origin: 'right' });

/*================================================== typed js ==================================================*/

const typed = new Typed('.multiple-text', {
    strings: ['Tec. em Inteligência Artificial Aplicada','Frontend Developer Jr'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

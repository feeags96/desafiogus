document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
        showItem(currentIndex);
    });

    showItem(currentIndex);

    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert(button.getAttribute('data-message'));
        });
    });

            const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
            const backToTopButton = document.getElementById('back-to-top');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 500) { 
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
            });
        
            backToTopButton.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'

        });
    });
});

function sanitizeString(str) {
    var sanitizedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    sanitizedStr = sanitizedStr.replace(/\s+/g, '-');   
    sanitizedStr = sanitizedStr.replace(/[^a-z0-9-]/g, '');
    return sanitizedStr;
}

document.getElementById("back-to-top").addEventListener("click", function () {
    gtag('event', 'clique', {
        'custom_section': 'home',
        'custom_type': 'botao',
        'custom_title': 'retornar-topo'
    });
});

    window.addEventListener('DOMContentLoaded', function() {
        let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;

        function updateCarousel(index) {
            items.forEach((item, i) => {
                item.classList.toggle('active', i === index);
            });
            gtag('event', 'view_banner', {
                'custom_section': 'body',
                'custom_type': 'carousel',
                'custom_title': `banner-${index + 1}`
            });
        }

        document.getElementById('voltar').addEventListener('click', function() {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
            updateCarousel(currentIndex);
        });

        document.getElementById('avancar').addEventListener('click', function() {
            currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
            updateCarousel(currentIndex);
        });

        updateCarousel(currentIndex);
    });

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".buy-btn");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var item_name = this.closest(".product").querySelector("h2").innerText;
            var customTitle = sanitizeString(item_name);
            gtag('event', 'clique_comprar', {
                'custom_section': 'body',
                'custom_type': 'botao',
                'custom_title': 'comprar:'+customTitle
            });
        });
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        var links = document.querySelectorAll('nav ul li a');

        links.forEach(function(link) {
            link.addEventListener("click", function(event) {
            var nameNav = this.innerText;
            var customTitle = sanitizeString(nameNav);
                gtag('event', 'clique', {
                    'custom_section': 'header',
                    'custom_type': 'botao-nav',
                    'custom_title': customTitle
                });
            });
        });
    });

document.getElementById("logo").querySelector('a').addEventListener("click", function () {
    gtag('event', 'clique', {
        'custom_section': 'header',
        'custom_type': 'icon',
        'custom_title': 'logo'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            gtag('event', 'clique', {
                'custom_section': 'footer',
                'custom_type': 'botao-icon',
                'custom_title': 'redes-sociais'
            });
        });
    });
});

  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("#newsletter form");
    var isFormInteracted = false;
    var clickListener;

    form.addEventListener("input", function() {
        if (!isFormInteracted) {
            isFormInteracted = true;

            clickListener = function(event) {
                var isClickInsideForm = form.contains(event.target);

                if (!isClickInsideForm) {
                    gtag('event', 'abandono_form', {
                        'custom_section': 'body',
                        'custom_type': 'interacao',
                        'custom_title': 'newsletter_saiu'
                    });

                    isFormInteracted = false;

                
                    document.removeEventListener("click", clickListener);
                }
            };

            document.addEventListener("click", clickListener);
        }
    });
  });

document.querySelector("#searchbtn button").addEventListener("click", function() {
    var pesquisa = document.querySelector("#searchbtn input").value;
    gtag('event', 'campo_search', {
        'custom_section': 'header',
        'custom_type': 'search',
        'custom_title': sanitizeString(pesquisa)
    });
});






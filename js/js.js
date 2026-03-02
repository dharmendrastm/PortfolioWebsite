$(document).ready(function () {

    // Responsive Slick Slider
    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

        responsive: [
            {
                breakpoint: 1024, // Laptop / Tablet
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Tablet / Large Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 480, // Small Mobile
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    // Mobile menu elements
    const hamburger = document.querySelector('.hamberger');
    const closeBtn = document.querySelector('.times');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav ul li a');

    // Open menu
    hamburger?.addEventListener('click', () => {
        mobileNav?.classList.add('open');
        document.body.style.overflow = 'hidden';
    });

    // Close menu
    closeBtn?.addEventListener('click', () => {
        mobileNav?.classList.remove('open');
        document.body.style.overflow = 'auto';
    });

    // Close menu when clicking link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav?.classList.remove('open');
            document.body.style.overflow = 'auto';
        });
    });

    // Reset menu when resizing to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            mobileNav?.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });

});

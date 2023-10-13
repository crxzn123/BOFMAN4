(function ($) {

    //Mobile menu js
    $('.mobile_menu').on('click', function () {
        $('.slide-menu').toggleClass('activee');
    });

    $('.menu-close').on('click', function () {
        $('.slide-menu').removeClass('activee');
    });

    //    child dropdown
    $('.has-child').on('click', function () {
        $('.mobile_dropdown').toggleClass('activee');
    });


    //Scroll Top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').fadeIn().addClass('opacity');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
        return false;
    });


    //popup-gallery
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        tLoading: 'Loading image #%curr%...',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            navigateByImgClick: true,
            enabled: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });


    $('.hero_slider').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5500,
        //autoplayHoverPause: true,
        animateOut: "slideOutDown",
        animateIn: "slideInDown",
        navText: ['<i class="fal fa-arrow-left"></i>', '<i class="fal fa-arrow-right"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                animateOut: "slideOutDown",
                animateIn: "slideInDown",
            },
            600: {
                items: 1,
                animateOut: "slideOutDown",
                animateIn: "slideInDown",
            },
            1000: {
                items: 1,
            }
        }
    })




})(jQuery);
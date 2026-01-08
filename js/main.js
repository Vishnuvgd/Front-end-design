$(document).ready(function () {

    $('.service-slider').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
    });

    $('.portfolio-slider').slick({
        slidesToShow: 3,
        arrows: true,
        dots: false,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
    });

});

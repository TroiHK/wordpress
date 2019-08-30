require('slick-carousel');

(function ($) {
    'use strict';
    $(document).ready(function () {
        createSlick();
    });

    $(window).on('resizeend', function () {
        createSlick();
    });

    function createSlick() {
        /* ########################################################################################### */
        /* -------------------------------------- K Slider  --------------------------------------- */
        /* ########################################################################################### */
        let slider = $('.hkt-slider');
        let slide = $('.hkt-slider .hkt-item');

        if (slide.length > 1) {
            slider.not('.slick-initialized').slick(
                {
                    infinite: false,
                    arrows: true,
                    speed: 300,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    preletrow : slider.find('.hkt-prev'),
                    nextArrow : slider.find('.hkt-next'),
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 4,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                            }
                        },
                    ]
                }
            );
        }
    }

})(jQuery);
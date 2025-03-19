/**
 * Navigation and Interactive Features
 */
(function($) {
    'use strict';

    // Mobile Menu Toggle
    function initMobileMenu() {
        const menuToggle = $('.menu-toggle');
        const primaryMenu = $('.main-navigation');

        menuToggle.on('click', function() {
            primaryMenu.toggleClass('toggled');
            $(this).attr('aria-expanded', primaryMenu.hasClass('toggled'));
        });
    }

    // Smooth Scroll for Anchor Links
    function initSmoothScroll() {
        $('a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 100
                    }, 1000);
                    return false;
                }
            }
        });
    }

    // Charts Animation on Scroll
    function initChartsAnimation() {
        const charts = $('.chart-container');
        
        if (!charts.length) return;

        $(window).on('scroll', function() {
            charts.each(function() {
                const chartTop = $(this).offset().top;
                const windowBottom = $(window).scrollTop() + $(window).height();
                
                if (chartTop < windowBottom) {
                    $(this).addClass('animate');
                }
            });
        });
    }

    // Initialize when DOM is ready
    $(document).ready(function() {
        initMobileMenu();
        initSmoothScroll();
        initChartsAnimation();
    });

})(jQuery);

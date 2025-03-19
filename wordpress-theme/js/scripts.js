/**
 * Main Scripts for Prime Data Works Theme
 */
(function($) {
    'use strict';

    // Chart Defaults
    Chart.defaults.font.family = "'Inter', sans-serif";
    Chart.defaults.color = '#6b7280';
    Chart.defaults.plugins.tooltip.backgroundColor = '#0f172a';

    // Analytics Tabs
    function initAnalyticsTabs() {
        $('.analytics-tab').on('click', function(e) {
            e.preventDefault();
            const target = $(this).data('target');

            // Update active states
            $('.analytics-tab').removeClass('active');
            $(this).addClass('active');

            // Show content
            $('.tool-content').removeClass('active');
            $(target).addClass('active');
        });
    }

    // Case Study Progressive Disclosure
    function initCaseStudies() {
        $('.case-study-step').on('click', function() {
            const step = $(this);
            const content = step.next('.step-content');

            step.toggleClass('active');
            content.slideToggle(300);
        });
    }

    // Metrics Counter Animation
    function animateMetrics() {
        $('.metric-counter').each(function() {
            const $this = $(this);
            const countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
    }

    // Initialize when DOM is ready
    $(document).ready(function() {
        initAnalyticsTabs();
        initCaseStudies();
        
        // Animate metrics when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateMetrics();
                    observer.unobserve(entry.target);
                }
            });
        });

        $('.metrics-section').each(function() {
            observer.observe(this);
        });
    });

})(jQuery);

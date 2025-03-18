<?php
/**
 * Template part for displaying the hero section
 */
?>
<div class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">
                Transform Your Data Into
                <span class="gradient-text">Actionable Insights</span>
            </h1>
            <p class="hero-description">
                Prime Data Works helps businesses make data-driven decisions through advanced analytics,
                visualization, and strategic insights. Unlock the power of your data with our expert team.
            </p>
            <div class="button-group">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="button button-primary">Get Started</a>
                <a href="<?php echo esc_url(home_url('/case-studies')); ?>" class="button button-outline">View Case Studies</a>
            </div>
        </div>
        <div class="hero-image">
            <?php if (get_field('hero_image')): ?>
                <img src="<?php echo esc_url(get_field('hero_image')); ?>" 
                     alt="Data Analytics Dashboard" 
                     class="rounded-image shadow">
            <?php endif; ?>
        </div>
    </div>
</div>

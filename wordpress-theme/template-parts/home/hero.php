<?php
/**
 * Template part for displaying the hero section
 */
?>
<div class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <?php if (get_field('hero_title')): ?>
                <h1 class="hero-title">
                    <?php 
                    $title = get_field('hero_title');
                    // Split the title at "Actionable Insights" to apply gradient
                    $parts = explode('Actionable Insights', $title);
                    echo esc_html($parts[0]);
                    if (count($parts) > 1) {
                        echo '<span class="gradient-text">Actionable Insights</span>';
                        echo esc_html($parts[1]);
                    }
                    ?>
                </h1>
            <?php endif; ?>

            <?php if (get_field('hero_description')): ?>
                <p class="hero-description">
                    <?php echo esc_html(get_field('hero_description')); ?>
                </p>
            <?php endif; ?>

            <div class="button-group">
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="button button-primary">
                    Get Started
                </a>
                <a href="<?php echo esc_url(home_url('/case-studies')); ?>" class="button button-outline">
                    View Case Studies
                </a>
            </div>
        </div>

        <?php if (get_field('hero_image')): 
            $image = get_field('hero_image');
        ?>
            <div class="hero-image">
                <img src="<?php echo esc_url($image['url']); ?>" 
                     alt="<?php echo esc_attr($image['alt']); ?>"
                     class="rounded-image shadow">
            </div>
        <?php endif; ?>
    </div>
</div>
<?php
/**
 * Template part for displaying the special offer section
 */
?>
<section class="special-offer bg-primary-light">
    <div class="container">
        <div class="special-offer-content">
            <h2 class="section-title"><?php echo esc_html(get_field('offer_title')); ?></h2>
            <p class="section-description"><?php echo esc_html(get_field('offer_description')); ?></p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="button button-primary">
                <?php echo esc_html(get_field('offer_button_text')); ?>
            </a>
        </div>
    </div>
</section>

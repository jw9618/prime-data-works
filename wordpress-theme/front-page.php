<?php
/**
 * Template Name: Home Page
 */

get_header();
?>

<main class="site-main">
    <?php get_template_part('template-parts/home/hero'); ?>

    <?php get_template_part('template-parts/home/special-offer'); ?>

    <?php get_template_part('template-parts/home/benefits'); ?>

    <section class="cta bg-primary-light">
        <div class="container">
            <h2 class="section-title"><?php echo esc_html(get_field('cta_title')); ?></h2>
            <p class="section-description"><?php echo esc_html(get_field('cta_description')); ?></p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="button button-primary">
                <?php echo esc_html(get_field('cta_button_text', 'Get Started')); ?>
            </a>
        </div>
    </section>
</main>

<?php get_footer(); ?>
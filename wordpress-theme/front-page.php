<?php
/**
 * Template Name: Home Page
 */

get_header();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php
        while ( have_posts() ) :
            the_post();

            // If page is edited with Elementor
            if ( \Elementor\Plugin::$instance->preview->is_preview_mode() || \Elementor\Plugin::$instance->db->is_built_with_elementor( get_the_ID() ) ) {
                the_content();
            } else {
                // Default template parts if not using Elementor
                get_template_part('template-parts/home/hero');
                get_template_part('template-parts/home/special-offer');
                get_template_part('template-parts/home/benefits');
                ?>
                <section class="cta bg-primary-light">
                    <div class="container">
                        <h2 class="section-title"><?php echo esc_html(get_field('cta_title')); ?></h2>
                        <p class="section-description"><?php echo esc_html(get_field('cta_description')); ?></p>
                        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="button button-primary">
                            <?php echo esc_html(get_field('cta_button_text', 'Get Started')); ?>
                        </a>
                    </div>
                </section>
                <?php
            }
        endwhile;
        ?>
    </main>
</div>

<?php get_footer(); ?>
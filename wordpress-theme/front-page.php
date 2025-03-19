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
            }
        endwhile;
        ?>
    </main>
</div>

<?php get_footer(); ?>
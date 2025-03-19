<?php
/**
 * Template part for displaying the benefits section
 */
?>
<section class="benefits">
    <div class="container">
        <h2 class="section-title">Why Choose DataViz Analytics</h2>
        <div class="benefits-grid">
            <?php
            if (have_rows('benefits')):
                while (have_rows('benefits')): the_row();
                    ?>
                    <div class="benefit-card">
                        <div class="benefit-icon">
                            <?php 
                            $icon = get_sub_field('icon');
                            if ($icon) {
                                echo prime_data_works_get_icon($icon);
                            }
                            ?>
                        </div>
                        <h3 class="benefit-title"><?php echo esc_html(get_sub_field('title')); ?></h3>
                        <p class="benefit-description"><?php echo esc_html(get_sub_field('description')); ?></p>
                    </div>
                    <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
</section>
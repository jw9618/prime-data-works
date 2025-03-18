<?php
/**
 * Template Name: Home Page
 */

get_header();
?>

<?php get_template_part('template-parts/home/hero'); ?>

<?php get_template_part('template-parts/home/special-offer'); ?>

<?php get_template_part('template-parts/home/benefits'); ?>

<?php
// Analytics Tools Section
if (have_rows('analytics_tools')):
    ?>
    <section class="analytics-tools">
        <div class="container">
            <h2 class="section-title">Analytics Tools Integration</h2>
            <div class="tools-grid">
                <?php
                while (have_rows('analytics_tools')): the_row();
                    ?>
                    <div class="tool-card">
                        <?php if (get_sub_field('tool_image')): ?>
                            <img src="<?php echo esc_url(get_sub_field('tool_image')); ?>" 
                                 alt="<?php echo esc_attr(get_sub_field('tool_name')); ?>"
                                 class="tool-image">
                        <?php endif; ?>
                        <h3 class="tool-name"><?php echo esc_html(get_sub_field('tool_name')); ?></h3>
                        <p class="tool-description"><?php echo esc_html(get_sub_field('tool_description')); ?></p>
                    </div>
                    <?php
                endwhile;
                ?>
            </div>
        </div>
    </section>
    <?php
endif;

// Team Section
if (have_rows('team_members')):
    ?>
    <section class="team bg-gray-50">
        <div class="container">
            <h2 class="section-title">Our Expert Team</h2>
            <div class="team-grid">
                <?php
                while (have_rows('team_members')): the_row();
                    ?>
                    <div class="team-card">
                        <?php if (get_sub_field('member_image')): ?>
                            <img src="<?php echo esc_url(get_sub_field('member_image')); ?>" 
                                 alt="<?php echo esc_attr(get_sub_field('member_name')); ?>"
                                 class="member-image">
                        <?php endif; ?>
                        <h3 class="member-name"><?php echo esc_html(get_sub_field('member_name')); ?></h3>
                        <p class="member-role"><?php echo esc_html(get_sub_field('member_role')); ?></p>
                    </div>
                    <?php
                endwhile;
                ?>
            </div>
        </div>
    </section>
    <?php
endif;

// Final CTA
?>
<section class="cta bg-primary-light">
    <div class="container">
        <h2 class="section-title"><?php echo esc_html(get_field('cta_title')); ?></h2>
        <p class="section-description"><?php echo esc_html(get_field('cta_description')); ?></p>
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="button button-primary">
            <?php echo esc_html(get_field('cta_button_text')); ?>
        </a>
    </div>
</section>

<?php get_footer(); ?>

<?php get_header(); ?>

<!-- Debug output -->
<!-- Template: index.php -->
<?php
echo '<!-- Current template file: ' . get_page_template() . ' -->';
echo '<!-- Is front page: ' . is_front_page() . ' -->';
echo '<!-- Page ID: ' . get_the_ID() . ' -->';
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
            <img src="<?php echo esc_url(get_theme_file_uri('images/hero-dashboard.jpg')); ?>" 
                 alt="Data Analytics Dashboard" 
                 class="rounded-image shadow">
        </div>
    </div>
</div>

<?php if (have_posts()): ?>
    <section class="section">
        <div class="section-container">
            <div class="grid grid-cols-3">
                <?php while (have_posts()): the_post(); ?>
                    <article class="card">
                        <?php if (has_post_thumbnail()): ?>
                            <div class="card-image">
                                <?php the_post_thumbnail('medium'); ?>
                            </div>
                        <?php endif; ?>
                        <div class="card-content">
                            <h2 class="card-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="card-excerpt">
                                <?php the_excerpt(); ?>
                            </div>
                            <a href="<?php the_permalink(); ?>" class="button button-outline">Read More</a>
                        </div>
                    </article>
                <?php endwhile; ?>
            </div>
        </div>
    </section>
<?php endif; ?>

<?php get_footer(); ?>
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
            // Loop through the three benefits
            for ($i = 1; $i <= 3; $i++) {
                $icon = get_field("benefit_{$i}_icon");
                $title = get_field("benefit_{$i}_title");
                $description = get_field("benefit_{$i}_description");

                if ($title && $description) {
                    ?>
                    <div class="benefit-card">
                        <?php if ($icon): ?>
                            <div class="benefit-icon">
                                <?php echo prime_data_works_get_icon($icon); ?>
                            </div>
                        <?php endif; ?>
                        <h3 class="benefit-title"><?php echo esc_html($title); ?></h3>
                        <p class="benefit-description"><?php echo esc_html($description); ?></p>
                    </div>
                    <?php
                }
            }
            ?>
        </div>
    </div>
</section>
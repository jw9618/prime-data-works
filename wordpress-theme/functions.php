<?php
if (!defined('ABSPATH')) exit;

function prime_data_works_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('menus');
    add_theme_support('responsive-embeds');
    add_theme_support('align-wide');
    add_theme_support('custom-spacing');
    add_theme_support('custom-units');

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'prime-data-works'),
        'footer' => __('Footer Menu', 'prime-data-works'),
    ));
}
add_action('after_setup_theme', 'prime_data_works_setup');

function prime_data_works_scripts() {
    // Enqueue styles
    wp_enqueue_style('prime-data-works-style', get_stylesheet_uri());
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    wp_enqueue_style('lucide-icons', 'https://unpkg.com/lucide-static/font/lucide.css');

    // Add Chart.js for data visualization
    wp_enqueue_script('chartjs', 'https://cdn.jsdelivr.net/npm/chart.js', array(), '3.7.0', true);

    // Add custom JavaScript
    wp_enqueue_script('prime-data-works-scripts', get_template_directory_uri() . '/js/scripts.js', array('jquery'), '1.0', true);

    // Add responsive navigation
    wp_enqueue_script('prime-data-works-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0', true);

    // Localize script for AJAX
    wp_localize_script('prime-data-works-scripts', 'primeDataWorks', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('prime_data_works_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'prime_data_works_scripts');

// Register Custom Widget Area
function prime_data_works_widgets_init() {
    register_sidebar(array(
        'name'          => __('Data Visualization Sidebar', 'prime-data-works'),
        'id'            => 'data-viz-sidebar',
        'description'   => __('Add widgets here to display data visualizations', 'prime-data-works'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
}
add_action('widgets_init', 'prime_data_works_widgets_init');

// Custom Chart Shortcode
function prime_data_works_chart_shortcode($atts) {
    $atts = shortcode_atts(array(
        'type' => 'line',
        'data' => '',
        'labels' => '',
        'title' => '',
    ), $atts);

    $chart_id = 'chart-' . uniqid();

    ob_start();
    ?>
    <div class="chart-container">
        <canvas id="<?php echo esc_attr($chart_id); ?>"></canvas>
    </div>
    <script>
    jQuery(document).ready(function($) {
        new Chart(document.getElementById('<?php echo esc_js($chart_id); ?>'), {
            type: '<?php echo esc_js($atts['type']); ?>',
            data: {
                labels: <?php echo $atts['labels']; ?>,
                datasets: [{
                    label: '<?php echo esc_js($atts['title']); ?>',
                    data: <?php echo $atts['data']; ?>,
                    borderColor: '#0f172a',
                    tension: 0.1
                }]
            }
        });
    });
    </script>
    <?php
    return ob_get_clean();
}
add_shortcode('data_chart', 'prime_data_works_chart_shortcode');

// Add custom theme options
function prime_data_works_customize_register($wp_customize) {
    // Theme Colors Section
    $wp_customize->add_section('prime_data_works_colors', array(
        'title' => __('Theme Colors', 'prime-data-works'),
        'priority' => 30,
    ));

    // Primary Color
    $wp_customize->add_setting('primary_color', array(
        'default' => '#0f172a',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label' => __('Primary Color', 'prime-data-works'),
        'section' => 'prime_data_works_colors',
    )));

    // Secondary Color
    $wp_customize->add_setting('secondary_color', array(
        'default' => '#2563eb',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'secondary_color', array(
        'label' => __('Secondary Color', 'prime-data-works'),
        'section' => 'prime_data_works_colors',
    )));

    // Layout Options Section
    $wp_customize->add_section('prime_data_works_layout', array(
        'title' => __('Layout Options', 'prime-data-works'),
        'priority' => 35,
    ));

    // Container Width
    $wp_customize->add_setting('container_width', array(
        'default' => '1200',
        'sanitize_callback' => 'absint',
    ));

    $wp_customize->add_control('container_width', array(
        'label' => __('Container Width (px)', 'prime-data-works'),
        'section' => 'prime_data_works_layout',
        'type' => 'number',
    ));
}
add_action('customize_register', 'prime_data_works_customize_register');

// Helper function to get icon HTML
function prime_data_works_get_icon($icon_name) {
    $icon_class = 'lucide-' . strtolower($icon_name);
    return sprintf('<i class="lucide %s"></i>', esc_attr($icon_class));
}

// Custom post type for Case Studies
function prime_data_works_case_studies() {
    register_post_type('case_study', array(
        'labels' => array(
            'name' => __('Case Studies', 'prime-data-works'),
            'singular_name' => __('Case Study', 'prime-data-works'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-analytics',
        'rewrite' => array('slug' => 'case-studies'),
    ));

    // Add custom fields for metrics
    register_post_meta('case_study', 'metrics', array(
        'type' => 'array',
        'single' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'prime_data_works_case_studies');

// Debug function to show template information
function prime_data_works_template_debug() {
    if (is_super_admin()) {
        global $template;
        echo '<!-- Current template: ' . basename($template) . ' -->';
        echo '<!-- Template directory: ' . get_template_directory() . ' -->';
        echo '<!-- Theme directory: ' . get_stylesheet_directory() . ' -->';

        // Debug ACF fields if they exist
        if (function_exists('get_field')) {
            echo '<!-- ACF Hero Title: ' . esc_html(get_field('hero_title')) . ' -->';
            echo '<!-- ACF Special Offer Title: ' . esc_html(get_field('offer_title')) . ' -->';
        }
    }
}
add_action('wp_footer', 'prime_data_works_template_debug');

?>
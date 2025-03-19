<?php
if (!defined('ABSPATH')) exit;

function prime_data_works_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('menus');

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

    // Add custom fonts if needed
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

    // Add Lucide Icons
    wp_enqueue_style('lucide-icons', 'https://unpkg.com/lucide-static/font/lucide.css');

    // Add any JavaScript files
    wp_enqueue_script('prime-data-works-scripts', get_template_directory_uri() . '/js/scripts.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'prime_data_works_scripts');

// Helper function to get icon HTML
function prime_data_works_get_icon($icon_name) {
    $icon_class = 'lucide-' . strtolower($icon_name);
    return sprintf('<i class="lucide %s"></i>', esc_attr($icon_class));
}

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
}
add_action('init', 'prime_data_works_case_studies');

// Add custom theme options
function prime_data_works_customize_register($wp_customize) {
    // Add section for theme colors
    $wp_customize->add_section('prime_data_works_colors', array(
        'title' => __('Theme Colors', 'prime-data-works'),
        'priority' => 30,
    ));

    // Add primary color setting
    $wp_customize->add_setting('primary_color', array(
        'default' => '#0f172a',
        'sanitize_callback' => 'sanitize_hex_color',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label' => __('Primary Color', 'prime-data-works'),
        'section' => 'prime_data_works_colors',
    )));
}
add_action('customize_register', 'prime_data_works_customize_register');

?>
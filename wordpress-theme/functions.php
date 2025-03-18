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
    ));
}
add_action('after_setup_theme', 'prime_data_works_setup');

function prime_data_works_scripts() {
    // Enqueue styles
    wp_enqueue_style('prime-data-works-style', get_stylesheet_uri());
    
    // Add custom fonts if needed
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    // Add any JavaScript files
    wp_enqueue_script('prime-data-works-scripts', get_template_directory_uri() . '/js/scripts.js', array(), '1.0', true);
}
add_action('wp_enqueue_scripts', 'prime_data_works_scripts');

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

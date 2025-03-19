<?php
if (!defined('ABSPATH')) exit;

add_action('after_setup_theme', function() {
    // Add Elementor support
    add_theme_support('elementor');
    add_theme_support('elementor-pro');
    add_theme_support('elementor-default-templates');
});

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

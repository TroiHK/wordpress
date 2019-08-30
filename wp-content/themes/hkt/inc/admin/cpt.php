<?php

if (!function_exists('create_events')) {

    function create_events() {

        $labels = array(
            'name' => __('Events', DOMAIN),
            'singular_name' => __('Event', DOMAIN),
            'add_new' => __('Add New', DOMAIN),
            'add_new_item' => __('Add New Event', DOMAIN),
            'edit_item' => __('Edit Event', DOMAIN),
            'new_item' => __('New Event', DOMAIN),
            'view_item' => __('View Event', DOMAIN),
            'search_items' => __('Search Events', DOMAIN),
            'not_found' => __('No events found', DOMAIN),
            'not_found_in_trash' => __('No events found in Trash', DOMAIN),
            'parent_item_colon' => 'Parent Events',
        );


        $args = array(
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'query_var' => true,
            'has_archive' => false,
            'capability_type' => 'post',
            'hierarchical' => true,
            'menu_position' => 5,
            'supports' => array('title', 'revisions'),
            'menu_icon' => 'dashicons-calendar',
            'rewrite' => array('slug' => __('event', DOMAIN))
        );

        register_post_type('events', $args);
    }
}

add_action('init', 'create_events');
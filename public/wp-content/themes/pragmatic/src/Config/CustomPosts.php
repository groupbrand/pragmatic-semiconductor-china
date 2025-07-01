<?php

namespace Theme\Config;

class CustomPosts
{
    public static function init()
    {

        // Custom Post Types
        add_filter('init', [self::class, 'registerPostTypes']);
        add_filter('init', [self::class, 'registerTaxonomies']);
    }


    // Custom Post Types

    public static function registerPostTypes()
    {
        register_post_type(
            'events',
            [
                'labels' => [
                    'name'                  => _x('Events', 'Post type general name', 'pragmatic'),
                    'singular_name'         => _x('Event', 'Post type singular name', 'pragmatic'),
                    'menu_name'             => _x('Events', 'Admin Menu text', 'pragmatic'),
                    'name_admin_bar'        => _x('Events', 'Add New on Toolbar', 'pragmatic'),
                    'add_new'               => __('Add New', 'pragmatic'),
                    'add_new_item'          => __('Add New Event', 'pragmatic'),
                    'new_item'              => __('New Event', 'pragmatic'),
                    'edit_item'             => __('Edit Event', 'pragmatic'),
                    'view_item'             => __('View Events', 'pragmatic'),
                    'all_items'             => __('All Events', 'pragmatic'),
                    'search_items'          => __('Search Events', 'pragmatic'),
                    'parent_item_colon'     => __('Parent Event:', 'pragmatic'),
                    'not_found'             => __('No events found.', 'pragmatic'),
                    'not_found_in_trash'    => __('No events found in Trash.', 'pragmatic'),
                ],
                'public' => true,
                'has_archive' => false,
                'show_in_rest' => true,
                'query_var' => true,
                'rewrite' => [
                    'slug' => __('events'),
                    'with_front' => false
                ],
                'supports' => ['title', 'thumbnail', 'excerpt', 'editor'],
                'menu_icon' => 'dashicons-calendar-alt',
            ]
        );
    }

    public static function registerTaxonomies()
    {
        register_taxonomy(
            'event_categories',
            'events',
            [
                'hierarchical' => true,
                'labels' => [
                    'name' => _x('Event Categories', 'taxonomy general name', 'pragmatic'),
                    'singular_name' => _x('Event Category', 'taxonomy singular name', 'pragmatic'),
                    'search_items' =>  __('Search Event Categories', 'pragmatic'),
                    'popular_items' => __('Popular Event Categories', 'pragmatic'),
                    'all_items' => __('All Event Categories', 'pragmatic'),
                    'parent_item' => null,
                    'parent_item_colon' => null,
                    'edit_item' => __('Edit Event Category', 'pragmatic'),
                    'update_item' => __('Update Event Category', 'pragmatic'),
                    'add_new_item' => __('Add New Event Category', 'pragmatic'),
                    'new_item_name' => __('New Event Category', 'pragmatic'),
                    'separate_items_with_commas' => __('Separate Event Categories with commas', 'pragmatic'),
                    'add_or_remove_items' => __('Add or remove Event Categories', 'pragmatic'),
                    'choose_from_most_used' => __('Choose from the most used Event Category', 'pragmatic'),
                    'menu_name' => __('Event Categories', 'pragmatic')
                ],
                'show_ui' => true,
                'show_admin_column' => true,
                'update_count_callback' => '_update_post_term_count',
                'query_var' => true,
                'show_in_rest' => true
            ]
        );
    }
}

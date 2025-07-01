<?php

namespace Theme\Config;

class ACFBlocks
{
    public static function init()
    {
        // Remove block directory
        remove_action('enqueue_block_editor_assets', 'wp_enqueue_editor_block_directory_assets');

        // Custom Post Types
        add_action('init', [self::class, 'register_acf_blocks']);
        add_filter('allowed_block_types_all', [self::class, 'set_allowed_block_types'], 10, 2);
        add_action('init', [self::class, 'create_post_default_template']);
        add_action('after_setup_theme', [self::class, 'remove_theme_patterns']);
    }


    // // Register Custom Blocks
    public static function register_acf_blocks()
    {
        //register_block_type(__DIR__ . '/acfBlocks/accordion-image-panel');
        register_block_type(__DIR__ . '/acfBlocks/accordion-steps-panel');
        register_block_type(__DIR__ . '/acfBlocks/brand-logos-panel');
        register_block_type(__DIR__ . '/acfBlocks/brand-moment-panel');
        register_block_type(__DIR__ . '/acfBlocks/column-image-panel');
        register_block_type(__DIR__ . '/acfBlocks/content-promo-panel');
        register_block_type(__DIR__ . '/acfBlocks/content-promo-with-image-panel');
        register_block_type(__DIR__ . '/acfBlocks/cross-link-panel');
        register_block_type(__DIR__ . '/acfBlocks/hero-video-panel');
        register_block_type(__DIR__ . '/acfBlocks/image-content-promo-panel');
        register_block_type(__DIR__ . '/acfBlocks/image-slider-panel');
        register_block_type(__DIR__ . '/acfBlocks/image-text-panel');
        register_block_type(__DIR__ . '/acfBlocks/info-grid-panel');
        register_block_type(__DIR__ . '/acfBlocks/internal-hero-panel');
        register_block_type(__DIR__ . '/acfBlocks/internal-hero-plain-panel');
        register_block_type(__DIR__ . '/acfBlocks/internal-hero-image-panel');
        register_block_type(__DIR__ . '/acfBlocks/faq-panel');
        register_block_type(__DIR__ . '/acfBlocks/menu-image-panel');
        register_block_type(__DIR__ . '/acfBlocks/news-lister-panel');
        register_block_type(__DIR__ . '/acfBlocks/news-promo-panel');
        register_block_type(__DIR__ . '/acfBlocks/news-promo-hero-panel');
        register_block_type(__DIR__ . '/acfBlocks/page-link-panel');
        register_block_type(__DIR__ . '/acfBlocks/related-articles-panel');
        register_block_type(__DIR__ . '/acfBlocks/simple-text-panel');
        register_block_type(__DIR__ . '/acfBlocks/summary-content-panel');
        register_block_type(__DIR__ . '/acfBlocks/summary-content-video-panel');
        register_block_type(__DIR__ . '/acfBlocks/tabbed-accordion-panel');
        register_block_type(__DIR__ . '/acfBlocks/text-visual-panel');
        register_block_type(__DIR__ . '/acfBlocks/three-column-panel');
        register_block_type(__DIR__ . '/acfBlocks/two-column-cards-panel');
        register_block_type(__DIR__ . '/acfBlocks/two-column-content-promo-panel');
        register_block_type(__DIR__ . '/acfBlocks/two-column-panel');
        register_block_type(__DIR__ . '/acfBlocks/video-embed-hero-panel');
        register_block_type(__DIR__ . '/acfBlocks/video-embed-side-image-hero-panel');
        register_block_type(__DIR__ . '/acfBlocks/video-panel');
        register_block_type(__DIR__ . '/acfBlocks/media-content-panel');
        register_block_type(__DIR__ . '/acfBlocks/media-content-small-panel');
        register_block_type(__DIR__ . '/acfBlocks/three-column-stats-panel');
        register_block_type(__DIR__ . '/acfBlocks/slider-panel');
        register_block_type(__DIR__ . '/acfBlocks/resource-panel');
        register_block_type(__DIR__ . '/acfBlocks/narrow-content-panel');
        register_block_type(__DIR__ . '/acfBlocks/resource-downloads-panel');
        register_block_type(__DIR__ . '/acfBlocks/intro-panel');
        register_block_type(__DIR__ . '/acfBlocks/logo-ticker-panel');
        register_block_type(__DIR__ . '/acfBlocks/static-image-panel');
        register_block_type(__DIR__ . '/acfBlocks/testimonial-panel');
        register_block_type(__DIR__ . '/acfBlocks/contact-panel');
        register_block_type(__DIR__ . '/acfBlocks/three-column-border-panel');
        register_block_type(__DIR__ . '/acfBlocks/column-grid-panel');
        register_block_type(__DIR__ . '/acfBlocks/content-promo-two-column-panel');
        register_block_type(__DIR__ . '/acfBlocks/events-lister-panel');
        register_block_type(__DIR__ . '/acfBlocks/events-upcoming-lister-panel');
        register_block_type(__DIR__ . '/acfBlocks/events-upcoming-promo-panel');
    }


    // Remove WP default blocks and allocate which blocks can be used by pages and posts be default
    public static function set_allowed_block_types($block_editor_context, $editor_context)
    {
        if (!empty($editor_context->post)) {
            if ('post' === $editor_context->post->post_type) {
                return array(
                    'core/freeform'
                );
            }

            if ('events' === $editor_context->post->post_type) {
                return array(
                    'core/freeform'
                );
            }

            if ('page' === $editor_context->post->post_type) {
                return array(
                    'acf/brand-moment-panel',
                    'acf/hero-video-panel',
                    'acf/simple-text-panel',
                    'acf/accordion-image-panel',
                    'acf/image-text-panel',
                    'acf/brand-logos-panel',
                    'acf/news-promo-hero-panel',
                    'acf/news-lister-panel',
                    'acf/news-promo-panel',
                    'acf/simple-text-panel',
                    'acf/video-embed-side-image-hero-panel',
                    'acf/info-grid-panel',
                    'acf/two-column-cards-panel',
                    'acf/text-visual-panel',
                    'acf/two-column-panel',
                    'acf/faq-panel',
                    'acf/video-embed-hero-panel',
                    'acf/cross-link-panel',
                    'acf/internal-hero-panel',
                    'acf/internal-hero-plain-panel',
                    'acf/image-content-promo-panel',
                    'acf/two-column-content-promo-panel',
                    'acf/content-promo-panel',
                    'acf/page-link-panel',
                    'acf/three-column-panel',
                    'acf/related-articles-panel',
                    'acf/column-image-panel',
                    'acf/video-panel',
                    'acf/menu-image-panel',
                    'acf/summary-content-panel',
                    'acf/summary-content-video-panel',
                    'acf/media-content-panel',
                    'acf/three-column-stats-panel',
                    'acf/slider-panel',
                    'acf/resource-panel',
                    'acf/narrow-content-panel',
                    'acf/resource-downloads-panel',
                    'acf/intro-panel',
                    'acf/logo-ticker-panel',
                    'acf/testimonial-panel',
                    'acf/contact-panel',
                    'acf/tabbed-accordion-panel',
                    'acf/three-column-border-panel',
                    'acf/column-grid-panel',
                    'acf/content-promo-with-image-panel',
                    'acf/internal-hero-image-panel',
                    'acf/static-image-panel',
                    'acf/image-slider-panel',
                    'acf/content-promo-two-column-panel',
                    'acf/media-content-small-panel',
                    'acf/events-lister-panel',
                    'acf/events-upcoming-lister-panel',
                    'acf/events-upcoming-promo-panel',
                    'acf/accordion-steps-panel'

                );
            }
        }
        return $block_editor_context;
    }


    // Create a specific predefined block template for a post. By default a post always has a classic editor to start with. This is locked by default,
    // however, If we want to allow more custom panels for post then we could unlock this and let users build up panels as they wish.
    public static function create_post_default_template()
    {
        $post_type_object = get_post_type_object('post');
        $post_type_object->template_lock = 'all';
        $post_type_object->template = array(
            array('core/freeform'),
        );

        $post_type_object = get_post_type_object('events');
        $post_type_object->template_lock = 'all';
        $post_type_object->template = array(
            array('core/freeform'),
        );
    }


    // Remove core patterns from interface
    public static function remove_theme_patterns()
    {
        remove_theme_support('core-block-patterns');
    }
}

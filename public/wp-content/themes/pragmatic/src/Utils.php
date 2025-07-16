<?php

namespace Theme;

class Utils
{
    public static function debug(mixed $variable): void
    {
        echo '<pre>' . print_r($variable, true) . '</pre>';
    }

    public static function getTemplateName(): string
    {
        global $template;
        return basename($template);
    }

    public static function getExcerpt($postID)
    {
        $excerpt = get_the_excerpt($postID);

        if (has_excerpt($postID)) {
            $excerpt = wp_trim_words($excerpt, apply_filters("excerpt_length", 30));
        }

        return $excerpt;
    }

    public static function getTrimmedHeading($heading)
    {

        if ($heading) {
            $heading =  wp_trim_words($heading, 16);
        }

        return $heading;
    }

    public static function getTrimmedCharHeading($heading)
    {

        if ($heading) {
            $heading =  mb_substr($heading, 0, 100, "utf-8");
        }

        return $heading;
    }

    public static function get_image_html($image_id, $sizes = 1): string
    {
        if ($image_id === 0) {
            return '';
        }

        switch ($sizes) {
            case 3:
                $sizes = '(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 33.33vw';
                break;
            case 2:
                $sizes = '(max-width: 480px) 100vw, 50vw';
                break;
            default:
                $sizes = '100vw';
        }

        $image_src = wp_get_attachment_image_url($image_id, 'full');
        $image_srcset = wp_get_attachment_image_srcset($image_id, 'full');
        $image_alt = get_post_meta($image_id, '_wp_attachment_image_alt', true);
        return <<<IMAGE
            <img src="{$image_src}" srcset="{$image_srcset}" sizes="{$sizes}" alt="{$image_alt}">
        IMAGE;
    }



    public static function get_generic_block_settings_classes($generic_block_settings)
    {

        // echo 'BEFORE:<br/>';
        // echo print_r($generic_block_settings);
        // echo '<br/>';

        $top_padding = (isset($generic_block_settings['top_padding']) ? $generic_block_settings['top_padding'] : '');
        $bottom_padding = (isset($generic_block_settings['bottom_padding']) ? $generic_block_settings['bottom_padding'] : '');
        $move_panel_up = (isset($generic_block_settings['move_panel_up']) ? $generic_block_settings['move_panel_up'] : '');

        $inset_panel = (isset($generic_block_settings['inset_panel']) ? $generic_block_settings['inset_panel'] : '');
        $inset_radius = (isset($generic_block_settings['inset_radius']) ? $generic_block_settings['inset_radius'] : '');
        $z_index = (isset($generic_block_settings['z_index']) ? $generic_block_settings['z_index'] : '');
        $background_colour = (isset($generic_block_settings['background_colour']) ? $generic_block_settings['background_colour'] : '');
        $outer_background_colour = (isset($generic_block_settings['outer_background_colour']) ? $generic_block_settings['outer_background_colour'] : '');

        $generic_block_class = '';
        $generic_block_class = ($move_panel_up == "Yes" || $move_panel_up == "yes" ? ' mpu' : '');
        $generic_block_class .= ($top_padding == "default" ? '' : ' tp-' . $top_padding);
        $generic_block_class .= ($bottom_padding == "default" ? '' : ' bp-' . $bottom_padding);

        $custom_class = (isset($generic_block_settings['custom_class']) ? $generic_block_settings['custom_class'] : '');

        if ($custom_class != '')
            $generic_block_class .= ' ' . $custom_class . ' ';



        switch ($inset_panel) {
            case 'yes':
                $generic_block_class .= ' inset';
                break;

            case 'yes--x':
                $generic_block_class .= ' inset--x';
                break;

            case 'yes--y':
                $generic_block_class .= ' inset--y';
                break;
        }

        $generic_block_class .= ($inset_radius == "default" ? ' ir-default' : '');
        $generic_block_class .= ($inset_radius == "no-top" ? ' ir-notop' : '');
        $generic_block_class .= ($inset_radius == "no-bottom" ? ' ir-nobottom' : '');
        $generic_block_class .= ($inset_radius == "none" ? ' ir-none' : '');

        if ($background_colour)
            $generic_block_class .= ' bgc-' . $background_colour . ' ';

        if ($outer_background_colour)
            $generic_block_class .= ' outer-bgc-' . $outer_background_colour . ' ';


        //$generic_block_class .= ($z_index != "" ? '' : 'inset');

        // echo 'AFTER:<br/>';
        // echo $generic_block_class;
        // echo '<br/>';


        return $generic_block_class;
    }



    public static function get_link_url($link_url, $link_page)
    {
        // echo 'lurl:' . $link_url . '<br/>';
        // echo 'link_page:' . $link_page . '<br/>';
        if ($link_page) {
            return $link_page;
        } else {
            return $link_url;
        }
    }


    public static function get_latest_posts($selected_post_ids, $post_type = 'post', $total_posts = 6)
    {

        $latest_posts = [];
        $featured_posts = [];

        if ($selected_post_ids) {
            $args = [
                'post_type' => $post_type,
                'posts_per_page' => 3,
                'post_status' => 'publish',
                'post__in' => $selected_post_ids,
                'order' => 'date',
                'orderby' => 'desc'
            ];

            $featured_posts = get_posts($args);
        }

        //echo count($featured_posts);


        if (count($featured_posts) < $total_posts) {
            $required_posts = $total_posts - count($featured_posts);

            $args = [
                'post_type' => $post_type,
                'posts_per_page' => $required_posts,
                'post_status' => 'publish',
                'post__not_in' => $selected_post_ids,
            ];

            $latest_posts =  get_posts($args);
        }



        $posts = array_merge($featured_posts, $latest_posts);

        //  echo print_r($posts);

        return $posts;
    }

    public static function get_post_primary_term_name($taxo, $post_id)
    {
        $primary_term = get_primary_term_name($taxo, $post_id);

        $category = '';
        if (!$primary_term->errors) {
            $category = $primary_term->name;
        }

        return $category;
    }


    public static function  share_article($article_id)
    {

        $title = get_the_title($article_id);
        $short_url = get_the_permalink($article_id);
        $url = get_the_permalink($article_id);

        $twitter_params =
            '?text=' . urlencode($title) . '+-' .
            '&amp;url=' . urlencode($short_url) .
            '&amp;counturl=' . urlencode($url) .
            '';

        $twitter_link = "https://twitter.com/share" . $twitter_params . "";
        $linkedIn_link = "https://www.linkedin.com/sharing/share-offsite/?url=" . urlencode($url);
        $facebook_link = "https://www.facebook.com/sharer/sharer.php?u=" . urlencode($url);
        $whatsapp_link = "https://api.whatsapp.com/send/?text=" . urlencode($url);
        $email_link = "mailto:?subject=I wanted you to see this website page&amp;body=Check out this site " . urlencode($url) . ".";

        echo '<div class="share-container">'

            . '<ul class="socials">'
            . '<li class="socials__item">'
            . '<a class="socials__item__link socials__item__link--linkedin" href="javascript:void(0)" onclick="window.open(\'' . $linkedIn_link . '\', \'sharer\', \'toolbar=0, status=0, width=626, height=436\');return false;" title="Linkedin" aria-label="LinkedIn"><span>LinkedIn</span></a>'
            . '</li>'
            . '<li class="socials__item"><a class="socials__item__link socials__item__link--x" href="javascript:void(0)" onclick="window.open(\'' . $twitter_link . '\', \'sharer\', \'toolbar=0, status=0, width=626, height=436\');return false;" title="X" aria-label="X"><span>X</span></a>'
            . '</li>'
            . '<li class="socials__item"><a class="socials__item__link socials__item__link--whatsapp" href="javascript:void(0)" onclick="window.open(\'' . $whatsapp_link . '\', \'sharer\', \'toolbar=0, status=0, width=626, height=436\');return false;" title="WhatsApp" aria-label="WhatsApp"><span>WhatsApp</span></a>'
            . '</li>'
            . '<li class="socials__item"><a class="socials__item__link socials__item__link--email" href="' . $email_link . '"></a>'
            . '</li>'
            . '<li class="socials__item"><a class="socials__item__link socials__item__link--copylink" href="javascript:void(0)" onclick="CopyToClipboard(window.location.href);" title="Copy Link" aria-label="Copy Link"></a>'
            . '</li>'
            . '</ul>';



        echo '</div>';
    }

    public static function get_static_translation($needle = '')
    {
        $target = '';
        $static_translations = get_field('static_translations', 'options');
        if ($static_translations) {
            $key = array_search($needle, array_column($static_translations, 'source'));
            if ($key !== false) {
                $target = $static_translations[$key]['target'];
            }
        }
        return $target;
    }


    public static function get_article_card($article, $panel_colour = '')
    {
        $item_date = get_the_date('j. M. Y', $article);
        //$heading = \Theme\Utils::getTrimmedHeading($article->post_title);
        $heading = \Theme\Utils::getTrimmedCharHeading($article->post_title);
        $external_url_link = get_post_meta($article->ID, 'external_url_link', true);
        $mins_read = get_post_meta($article->ID, 'mins_read', true);
        $summary = $article->post_excerpt;
        $image = get_post_thumbnail_id($article->ID);


        $post_min_read = \Theme\Utils::get_static_translation('min read');
        $post_read_button = \Theme\Utils::get_static_translation('Read');

        $button_icon_class = ' buttonV2--icon--small--arrow-right ';
        $target = '';
        if ($external_url_link) {
            $url = $external_url_link;
            $button_icon_class = ' buttonV2--icon--small--external-link ';
            $target = ' target="_blank" rel="noopener noreferrer" ';
        } else {
            $url = get_the_permalink($article->ID);
        }

        $panel_bg_class = '';
        if ($panel_colour == 'yellow') {
            $panel_bg_class = 'news-item-container--yellow';
        }


        $primary_term =  \Theme\Utils::get_post_primary_term_name('category', $article->ID);


        $category_tag = '';
        if ($primary_term) {
            $category_tag = '<div class="card-tag">' . $primary_term . '</div>';
        }

        $card_html = '<div class="news-item-container ' . $panel_bg_class . '">'
            . '<div class="content-container">'
            . '<div class="data-container">'
            . '<div class="data-container__col1"><p class="card-details">' . $item_date . '</p><p class="card-details">' . $mins_read . ' ' . __($post_min_read, 'pragmatic') . '</p></div>'
            . '<div class="data-container__col2">' . $category_tag . '</div>'
            . '</div>'
            . '<a href="' . $url . '"><h3 class="card-title">' . $heading . '</h3></a>'
            . '</div>'
            . '<div class="image-container">'
            . \Theme\Utils::get_image_html($image)
            . '<a ' . $target . ' class="buttonV2 buttonV2--icon buttonV2--icon--small ' . $button_icon_class . ' buttonV2--yellow-black " href="' . $url . '">' . __($post_read_button, 'pragmatic') . '</a>'
            . '</div>'
            . '</div>';


        return $card_html;
    }

    public static function render_video_embed($video_file = '', $video_poster_frame = '', $video_embed_script = '', $video_title = '', $video_caption = '', $with_margin_bottom = false, $square_aspect_ratio = false)
    {

        $margin_bottom_class = '';
        if ($with_margin_bottom) {
            $margin_bottom_class = 'video-container--with-margin';
        }

        $square_aspect_ratio_class = '';
        $poster_aspect_ratio_class = '';
        if ($square_aspect_ratio) {
            $square_aspect_ratio_class = 'video-container--square-aspect';
            $poster_aspect_ratio_class = 'poster-image-container--square-aspect';
        }
        if ($video_file) {

            echo '<div class="video-container ' . $margin_bottom_class . ' ' . $square_aspect_ratio_class . '">';
            echo '<video playsinline autoplay muted loop poster="' . $video_poster_frame . '">';
            echo '<source src="' . $video_file . '" type="video/mp4">';
            echo '</video>';
            echo '</div>';
        } else if ($video_embed_script) {

            echo '<div class="video-container ' . $margin_bottom_class . '">';
            echo '<iframe src="' . $video_embed_script . '&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="encrypted-media" title="' . $video_title . '"></iframe>';
            echo '</div>';
            echo '<script src="https://player.vimeo.com/api/player.js"></script>';
        } else if ($video_poster_frame) {
            echo '<div class="poster-image-container ' . $margin_bottom_class . ' ' . $poster_aspect_ratio_class . '">';
            echo '<img src="' . $video_poster_frame . '" />';
            echo '</div>';
        }

        if ($video_caption != '') {
            echo '<p class="video-caption">' . $video_caption . '</p>';
        }
    }

    public static function get_upcoming_events($total_posts = -1)
    {

        $args = [
            'post_type' => 'events',
            'posts_per_page' => $total_posts,
            'post_status' => 'publish',
        ];

        $args['meta_key'] = 'actual_date';
        $args['orderby'] = 'meta_value_num';
        $args['meta_type'] = 'DATETIME';
        $args['order'] = 'ASC';

        $args['meta_query'] = array(
            array(
                'key' => 'actual_date',
                'value' => date("Ymd"),
                'compare' => '>='
            )
        );



        $events = get_posts($args);

        return $events;
    }

    // This function is useful if you want to render an ACF block inside a PHP page
    // however by default it does not take any data from the page.  You need to pass all the 
    // data you wish to display in the attrs pararm.

    // The default param can be used to set fields to a default if no data is supplied.
    // The overrides param can be used to override data entered for this block

    // public static function render_acf_block_with_custom_data($block_name, $attrs = [], $default_attrs = [], $override_attrs = [])
    // {

    //     $block = acf_get_block_type($block_name);
    //     $content = '';
    //     $is_preview = false;

    //     // Set default data passed to function
    //     foreach ($attrs as $attr => $val) {

    //         if (!$val && isset($default_attrs[$attr]))
    //             $block['data'][$attr] = $default_attrs[$attr];
    //         else
    //             $block['data'][$attr] = $val;
    //     }

    //     // echo '<br/><br/>BEFORE<br/>';
    //     // echo print_r($block['data']);
    //     // echo '<br/>';

    //     // Set override data
    //     foreach ($override_attrs as $attr => $val) {
    //         // echo 'attr:' . $attr . '<br/>';
    //         // echo 'val:' . print_r($val) . '<br/>';
    //         $block['data'][$attr] = $val;
    //     }

    //     // echo '<br/><br/>AFTER<br/>';
    //     // echo print_r($block['data']);
    //     // echo '<br/>';


    //     echo acf_rendered_block($block, $content, $is_preview);
    // }
}
